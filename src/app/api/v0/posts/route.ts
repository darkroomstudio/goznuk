import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createClient } from '@/db/supabase/server'

export async function GET(req: NextRequest) {
  const supabase = createClient()

  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')

  if (postsError) {
    return NextResponse.json({
      message: 'Posts not found',
      error: postsError.message,
    })
  }

  return NextResponse.json({ posts })
}
