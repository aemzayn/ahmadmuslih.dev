import { IPost } from 'interfaces/Post'

export type PostProps = {
  post: IPost
}

export default function Post({ post }: PostProps) {
  return (
    <div className="cursor-pointer border border-teal-700 p-4 duration-150 hover:border-neon">
      <h3 className="gradient-text-light font-monument tracking-wide">
        {post.title}
      </h3>
    </div>
  )
}
