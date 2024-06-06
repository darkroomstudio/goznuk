import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getDraft(username: string, id: string) {
  return {
    id,
    username,
    title: 'Draft 1',
    content: 'This is a draft',
  }
}

type Context = { params: { username: string; slug: string } }

export async function GET(
  req: NextRequest,
  { params: { username, slug } }: Context
) {
  // this-should-be-a-slug-abcdef
  // id: abcdef
  const id = slug.split('-').pop()
  if (!id) throw new Error('Invalid slug')

  const draft = await getDraft(username, id)
  return NextResponse.json({ ...draft })
}
