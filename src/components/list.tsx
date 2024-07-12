import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function List() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="flex space-x-4 border-b pb-2">
        <button className="border-b-2 border-black font-semibold">
          Recommended
        </button>
        <button className="text-muted-foreground">Trending</button>
        <button className="text-muted-foreground">Latest</button>
      </div>
      <div className="mt-4 space-y-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="flex space-x-2">
              <Badge variant="secondary">MDX</Badge>
              <Badge variant="secondary">Markdown</Badge>
              <Badge variant="secondary">Blogging</Badge>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                How to write an article effectively with utilizing MDX
              </h2>
              <p className="text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived...
              </p>
            </div>
            <div className="text-muted-foreground flex items-center space-x-2 text-sm">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <span>Lee Robinson</span>
              <span>05/22/2024</span>
              <span>5min read</span>
            </div>
            {index < 2 && <hr className="border-muted-foreground border-t" />}
          </div>
        ))}
      </div>
    </div>
  )
}
