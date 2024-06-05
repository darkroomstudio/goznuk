import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getUser(name: string) {
  return { id: '0', name: 'Jiwon Choi', username: name }
}

type Context = { params: { name: string } }

export async function GET(req: NextRequest, { params: { name } }: Context) {
  const user = await getUser(name)
  return NextResponse.json({ ...user })
}
