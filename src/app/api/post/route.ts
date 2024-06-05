import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import { calculateReadTime } from '../../../utils/calculateReadTime'
import { slugify } from '../../../utils/slugify'
import { generatePreview } from '../../../utils/generatePreview'

export async function GET() {
  try {
    const result = await sql`SELECT * FROM posts`
    return NextResponse.json(result.rows)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const { user_id, title, content, category, description, banner_image } =
    await req.json()
  const slug = slugify(title)
  const readTime = calculateReadTime(content)
  const preview = generatePreview(content)

  try {
    const result = await sql`
      INSERT INTO posts (user_id, title, slug, content, preview, read_time, category, description, banner_image)
      VALUES (${user_id}, ${title}, ${slug}, ${content}, ${preview}, ${readTime}, ${category}, ${description}, ${banner_image})
      RETURNING *;
    `
    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 })
  }
}
