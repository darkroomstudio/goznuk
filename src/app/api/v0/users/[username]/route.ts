import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getUser(username: string) {
  return { id: '0', name: 'Jiwon Choi', username }
}

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const user = await getUser(username)
  return NextResponse.json({ ...user })
}
