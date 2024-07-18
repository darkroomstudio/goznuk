import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function PostCard({
  username,
  date,
  readTime,
  title,
  categories,
  avatarImageURL,
  description,
}: {
  username: string
  date: string
  readTime: string
  title: string
  categories: string[]
  avatarImageURL: string
  description: string
}) {
  return (
    <>
      <div className="flex space-x-2">
        {categories?.map((category) => (
          <Badge key={category} variant="secondary">
            {category}
          </Badge>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="text-muted-foreground flex items-center space-x-2 text-sm">
        <Avatar>
          <AvatarImage src={avatarImageURL} />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <span>{username}</span>
        <span>{date}</span>
        <span>{readTime}min read</span>
      </div>
    </>
  )
}
