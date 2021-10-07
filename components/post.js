const Post = () => {
  return (
    <div className="p-4 border border-teal-700 hover:border-neon duration-150 cursor-pointer">
      <h3 className="font-monument tracking-wide gradient-text-light">
        Lorem ipsum dolor sit.
      </h3>

      {/* Tags */}
      <div className="flex mt-1">
        {Array(1)
          .fill(1)
          .map(() => (
            <span className="p-1">#tag</span>
          ))}
      </div>
    </div>
  )
}

export default Post
