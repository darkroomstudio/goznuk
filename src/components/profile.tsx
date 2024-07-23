import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function ProfileChunk({ username }: { username: string }) {
  return (
    <div className="flex w-full flex-col items-center space-y-8 p-4">
      <div className="flex flex-col items-center space-y-2">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>FE</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">{username}</h1>
        <p className="text-muted-foreground">Just some dude @Baobab tree</p>
        <div className="flex space-x-4">
          <span>11 Subscribers</span>
          <span>24 Subscribing</span>
        </div>
        <Button variant="outline">Edit Profile</Button>
      </div>
      <hr className="w-full border-t" />
      <div className="flex w-full max-w-4xl space-x-8">
        <div className="flex w-1/4 flex-col space-y-4 p-4">
          <Input placeholder="Search blogs/articles..." />
          <div className="p-4">
            <p className="font-bold">Search by Tags</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>MDX</Badge>
              <Badge>Markdown</Badge>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-col space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">My Blogs</h2>
            <Badge variant="secondary">2 Published</Badge>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="space-y-2 p-4">
              <div className="flex space-x-2">
                <Badge>MDX</Badge>
                <Badge>Markdown</Badge>
              </div>
              <h3 className="text-lg font-bold">
                For This One You Had Two Tags
              </h3>
              <p className="text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>KU</AvatarFallback>
                </Avatar>
                <span>Kitsune Udon</span>
                <span>06/07/2024</span>
                <span>1min read</span>
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="flex space-x-2">
                <Badge>MDX</Badge>
                <Badge>Markdown</Badge>
              </div>
              <h3 className="text-lg font-bold">
                For This One You Had Two Tags
              </h3>
              <p className="text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>KU</AvatarFallback>
                </Avatar>
                <span>Kitsune Udon</span>
                <span>06/07/2024</span>
                <span>1min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
