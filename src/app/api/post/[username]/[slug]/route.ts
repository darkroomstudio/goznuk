import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string; slug: string } }
) {
  const { username, slug } = params
  const sanitizedUsername = username.startsWith('@')
    ? username.slice(1)
    : username

  console.log(
    '\nFetching published post for username:',
    sanitizedUsername,
    'and slug:',
    slug,
    '\n'
  )

  try {
    const result = await sql`
            SELECT p.*
            FROM posts p
            JOIN users u ON p.user_id = u.id
            WHERE u.username = ${sanitizedUsername} AND p.slug = ${slug} AND p.status = 'published';
        `
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(result.rows[0])
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching post' }, { status: 500 })
  }
}
