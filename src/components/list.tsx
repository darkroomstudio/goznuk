import { PostCard } from './post-card'

export default function List() {
  const posts = [
    {
      username: 'Jiwon Choi',
      date: '2021-10-01',
      readTime: '5',
      title: 'How to use Tailwind CSS with Next.js',
      categories: ['Next.js', 'Tailwind CSS'],
      avatarImageURL: 'https://avatars.githubusercontent.com/u/37282077?v=4',
      description: 'This is a tutorial on how to use Tailwind CSS with Next.js',
    },
    {
      username: 'Jeongho Yang',
      date: '2021-10-02',
      readTime: '10',
      title: 'How to use TypeScript with Next.js',
      categories: ['Next.js', 'TypeScript'],
      avatarImageURL: 'https://avatars.githubusercontent.com/u/37282077?v=4',
      description: 'This is a tutorial on how to use TypeScript with Next.js',
    },
    {
      username: 'Jungwhan Kim',
      date: '2021-10-03',
      readTime: '15',
      title: 'How to use ESLint with Next.js',
      categories: ['Next.js', 'ESLint'],
      avatarImageURL: 'https://avatars.githubusercontent.com/u/37282077?v=4',
      description: 'This is a tutorial on how to use ESLint with Next.js',
    },
  ]
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
        {posts.map((el, index) => (
          <div key={index} className="space-y-4">
            <PostCard {...el} />
            {index < 2 && <hr className="border-muted-foreground border-t" />}
          </div>
        ))}
      </div>
    </div>
  )
}
