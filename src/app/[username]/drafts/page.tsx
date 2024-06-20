import Link from 'next/link'

export default function Drafts({
  params: { username },
}: {
  params: { username: string }
}) {
  const drafts = ['this-should-be-a-slug-abcdef', 'another-draft-slug-123456']
  return (
    <>
      {drafts.map((slug, idx) => (
        <div key={idx}>
          <Link href={`/${username}/drafts/${slug}`}>{slug}</Link>
        </div>
      ))}
    </>
  )
}
