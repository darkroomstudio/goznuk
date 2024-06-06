import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col space-y-4">
      <Link href="/api/v0/users/devjiwonchoi">/api/v0/users/[username]</Link>
      <Link href="/api/v0/users/devjiwonchoi/drafts">
        /api/v0/users/[username]/drafts
      </Link>
      <Link href="/api/v0/users/devjiwonchoi/drafts/this-should-be-a-slug-abcdef">
        /api/v0/users/[username]/drafts/[slug]
      </Link>
    </section>
  )
}
