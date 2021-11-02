const Post = ({ post }) => {
  return (
    <div className="p-4 border border-teal-700 hover:border-neon duration-150 cursor-pointer">
      <h3 className="font-monument tracking-wide gradient-text-light">
        {post.title}
      </h3>
    </div>
  )
}

export default Post
