import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface Subscriber {
  id: string
  name: string
  username: string
}

interface SubsData {
  [key: string]: Subscriber[]
}

async function getSubscriber(username: string) {
  const subsData: SubsData = {
    ggkim0614: [
      {
        id: '0',
        name: 'Jiwon Choi',
        username: 'devjiwonchoi',
      },
      {
        id: '1',
        name: 'Jeongho Yang',
        username: 'jeonghoyang',
      },
    ],
    devjiwonchoi: [
      {
        id: '1',
        name: 'Jeongho Yang',
        username: 'jeonghoyang',
      },
      {
        id: '2',
        name: 'George Kim',
        username: 'ggkim0614',
      },
    ],
  }

  return subsData[username] || []
}

type Context = { params: { username: string } }

export async function GET(req: NextRequest, { params: { username } }: Context) {
  const subscribers = await getSubscriber(username)
  return NextResponse.json({ subscribers })
}
