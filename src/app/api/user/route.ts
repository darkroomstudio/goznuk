import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(req: NextRequest) {
  try {
    const result = await sql`SELECT * FROM users`

    if (result.rows.length == 0) {
      return NextResponse.json({ error: 'No users found' }, { status: 404 })
    }
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 })
  }
}
