import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getPost(name: string, slug: string) {
  // get post data from database
  // SELECT * FROM posts WHERE name = name AND slug = slug
  return {
    title: 'Foo, Bar, and Baz',
    slug,
    description: 'Learn how to correctly name mock variables.',
    keywords: 'foo, bar, baz, quz, qux',
    author: 'Jiwon Choi',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

type Context = { params: { name: string; slug: string } }

export async function GET(
  req: NextRequest,
  { params: { name, slug } }: Context
) {
  const post = await getPost(name, slug)
  return NextResponse.json({ ...post })
}
