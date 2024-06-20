export default function Draft({
  params: { username, slug },
}: {
  params: { username: string; slug: string }
}) {
  return (
    <>
      <div>User {username}</div>
      <div>Draft Post: {slug}</div>
    </>
  )
}
