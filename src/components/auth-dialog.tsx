'use client'
import type { JSX, SVGProps } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { useSignIn } from '@clerk/clerk-react'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { ProfileMenu } from '@/components/profile-menu'

export function AuthDialog() {
  const [open, setOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { signIn, setActive } = useSignIn()
  const authText = isSignUp ? 'Sign Up' : 'Sign In'
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    try {
      const result = await signIn?.create({
        identifier: email,
        password,
      })
      if (setActive) {
        await setActive({ session: result?.createdSessionId })
      }
    } catch (error) {
      console.log(error)
      setErrorMessage('Wrong email or password')
    }
  }
  return (
    <div className="flex items-center space-x-4">
      <SignedOut>
        <Button
          className="text-md rounded-[12px]"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Start Writing
        </Button>
        <Button
          className="text-md rounded-[12px]"
          onClick={() => setOpen(true)}
        >
          {authText}
        </Button>
      </SignedOut>
      <SignedIn>
        <Button
          className="text-md rounded-[12px]"
          variant="outline"
          onClick={() => router.push('/write')}
        >
          Start Writing
        </Button>
        <ProfileMenu />
      </SignedIn>
      <SignIn.Root>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="flex max-w-2xl p-0">
            <div className="flex flex-1 items-center justify-center bg-gray-200">
              <div className="text-9xl font-bold text-gray-400">G</div>
            </div>
            <div className="flex-1 p-8">
              <DialogHeader className="flex items-center justify-between">
                <DialogTitle>{authText} to Goznuk</DialogTitle>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  <DoorClosedIcon className="h-6 w-6" />
                </Button>
              </DialogHeader>
              <SignIn.Step name="start">
                <DialogDescription className="space-y-4">
                  <Clerk.Field name="identifier">
                    <Clerk.Input asChild>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Clerk.Input>
                  </Clerk.Field>
                  <Clerk.Field name="password">
                    <Clerk.Input asChild>
                      <Input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Clerk.Input>
                  </Clerk.Field>
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                  <SignIn.Action submit asChild>
                    <Button
                      type="submit"
                      className="flex w-full items-center justify-center space-x-2 bg-black text-white"
                      onClick={handleSignIn}
                    >
                      {authText}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </SignIn.Action>
                  <div className="space-y-2">
                    <Clerk.Connection name="google" className="w-full">
                      <Button
                        variant="outline"
                        className="flex w-full items-center justify-center space-x-2"
                      >
                        <ChromeIcon className="h-5 w-5" />
                        <span>{authText} with Google</span>
                      </Button>
                    </Clerk.Connection>
                    <Clerk.Connection name="github" className="w-full">
                      <Button
                        variant="outline"
                        className="flex w-full items-center justify-center space-x-2"
                      >
                        <GithubIcon className="h-5 w-5" />
                        <span>{authText} with Github</span>
                      </Button>
                    </Clerk.Connection>
                  </div>
                  <p className="text-center">
                    Don’t have an account?{' '}
                    <Link href="#" className="text-blue-500">
                      Sign Up
                    </Link>
                  </p>
                </DialogDescription>
              </SignIn.Step>
            </div>
          </DialogContent>
        </Dialog>
      </SignIn.Root>
    </div>
  )
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}

function DoorClosedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
