import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createClient } from '@/db/supabase/server'

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const supabase = createClient()

  const { data: user, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)

  if (userError) {
    return NextResponse.json({
      message: 'User not found',
      error: userError.message,
    })
  }

  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .eq('user_id', user[0]?.id ?? '')

  if (postsError) {
    return NextResponse.json({
      message: 'Posts not found',
      error: postsError.message,
    })
  }

  return NextResponse.json({ posts })
}
