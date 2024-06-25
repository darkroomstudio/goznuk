import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SignInModal } from './sigin-modal'

export function Header() {
  return (
    <div className="bg-[#1a1a2e] text-white">
      <div className="flex items-center justify-between bg-white p-4 text-black">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>GZ</AvatarFallback>
          </Avatar>
          <span className="text-xl font-bold">Goznuk</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search blogs/articles..."
              className="rounded-full border py-2 pl-4 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
              <kbd className="rounded bg-gray-200 px-2 py-1">⌘</kbd>
              <kbd className="rounded bg-gray-200 px-2 py-1">K</kbd>
            </div>
          </div>
          <Button variant="outline">Start writing</Button>
          <SignInModal />
        </div>
      </div>
    </div>
  )
}
