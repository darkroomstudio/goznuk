import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createClient } from '@/db/supabase/server'

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const supabase = createClient()

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single()

  if (error) {
    return NextResponse.json({
      message: 'User not found',
      error: error.message,
    })
  }

  return NextResponse.json({ ...user })
}
