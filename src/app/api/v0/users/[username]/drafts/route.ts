import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getDrafts(username: string) {
  return [
    {
      id: '0',
      username,
      title: 'Draft 1',
      content: 'This is a draft',
    },
    {
      id: '1',
      username,
      title: 'Draft 2',
      content: 'This is another draft',
    },
  ]
}

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const drafts = await getDrafts(username)
  return NextResponse.json({ drafts })
}
