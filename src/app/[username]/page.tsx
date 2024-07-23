import { ProfileChunk } from '@/components/profile'

export default function Profile({
  params: { username },
}: {
  params: { username: string }
}) {
  return <ProfileChunk username={username} />
}
