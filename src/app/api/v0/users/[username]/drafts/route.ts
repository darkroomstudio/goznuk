import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createClient } from '@/db/supabase/server'

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const supabase = createClient()

  // Get the user_id for the given username
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)

  if (userError || !user?.length) {
    return NextResponse.json({
      message: 'User not found',
      error: userError?.message,
    })
  }

  const { data: drafts, error: draftsError } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'draft')
    .eq('user_id', user[0]?.id ?? '')

  if (draftsError) {
    return NextResponse.json({
      message: 'Drafts not found',
      error: draftsError.message,
    })
  }

  return NextResponse.json({ drafts })
}
