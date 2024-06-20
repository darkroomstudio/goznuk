export default function Post({
  params: { username, slug },
}: {
  params: { username: string; slug: string }
}) {
  return (
    <>
      <div>User {username}</div>
      <div>Post: {slug}</div>
    </>
  )
}
