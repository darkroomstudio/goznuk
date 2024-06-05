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
    '\nFetching a draft for username: ',
    sanitizedUsername,
    'and slug: ',
    slug,
    '\n'
  )

  try {
    const draftResult = await sql`
            SELECT p.*
            FROM posts p
            JOIN users u ON p.user_id = u.id
            WHERE u.username = ${sanitizedUsername} AND p.slug = ${slug};
        `
    if (draftResult.rows.length === 0) {
      return NextResponse.json({ error: 'Draft not found' }, { status: 404 })
    }
    return NextResponse.json(draftResult.rows[0])
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching draft' }, { status: 500 })
  }
}
