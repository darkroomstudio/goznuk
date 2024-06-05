import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

interface User {
  id: number
  name: string
  username: string
  email: string
  created_at: string
}

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = params
  const sanitizedUsername = username.startsWith('@')
    ? username.slice(1)
    : username

  console.log(
    'Fetching profile and published posts for username:',
    sanitizedUsername
  )

  try {
    const userResult = await sql`
            SELECT id, name, username, email, created_at
            FROM users
            WHERE username = ${sanitizedUsername}
        `

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const user = userResult.rows[0] as User

    const postsResult = await sql`
            SELECT *
            FROM posts
            WHERE user_id = ${user.id} AND status = 'published'
        `

    return NextResponse.json({ user, posts: postsResult.rows })
  } catch (error) {
    console.error('Error fetching profile and published posts:', error)
    return NextResponse.json(
      { error: 'Error fetching profile and published posts' },
      { status: 500 }
    )
  }
}
