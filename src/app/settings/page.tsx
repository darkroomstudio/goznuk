import { Button } from '@/components/ui/button'

export default function Settings() {
  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Change Account Email</h2>
          <p className="text-muted-foreground mb-4">
            Keep your account information up to date by changing your email
            address.
          </p>
          <Button variant="outline">Change email</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Change Password</h2>
          <p className="text-muted-foreground mb-4">
            Ensure your account remains secure by updating your password
            regularly.
          </p>
          <Button variant="outline">Change password</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Delete Account</h2>
          <p className="text-muted-foreground mb-4">
            Deleting account will completely delete all of your information and
            content.
          </p>
          <Button variant="outline">Delete Account</Button>
        </div>
      </div>
      <footer className="text-muted-foreground mt-16 text-center">
        Darkroom Studio ©2024
      </footer>
    </div>
  )
}
