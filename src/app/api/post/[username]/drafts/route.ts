import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

interface User {
  id: number
}

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = params
  const sanitizedUsername = username.startsWith('@')
    ? username.slice(1)
    : username

  console.log('Fetching drafts for username: ', sanitizedUsername)

  try {
    const userResult = await sql`
            SELECT id
            FROM users
            WHERE username = ${sanitizedUsername}
        `

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const user = userResult.rows[0] as User

    const draftsResult = await sql`
            SELECT *
            FROM posts
            WHERE user_id = ${user.id} AND status = 'draft'
        `

    return NextResponse.json(draftsResult.rows)
  } catch (error) {
    console.error('Error fetching drafts: ', error)
    return NextResponse.json(
      { error: 'Error fetching drafts' },
      { status: 500 }
    )
  }
}
