import { SignedIn, UserButton, SignInButton, SignedOut } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default function Login() {
  const { userId }: { userId: string | null } = auth()
  if (!userId)
    return (
      <SignedOut>
        <SignInButton />
      </SignedOut>
    )
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  )
}
