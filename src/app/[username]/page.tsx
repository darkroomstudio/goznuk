export default function Profile({
  params: { username },
}: {
  params: { username: string }
}) {
  return <div>User Profile: {username}</div>
}
