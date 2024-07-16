import { PostCard } from './post-card'

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
            <PostCard />
            {index < 2 && <hr className="border-muted-foreground border-t" />}
          </div>
        ))}
      </div>
    </div>
  )
}
