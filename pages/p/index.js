import { NextSeo } from 'next-seo'
import HamburgerMenu from '@/components/hamburger-menu'
import Layout from '@/components/layout'
import Post from '@/components/post'
import { getAllPosts } from 'lib/posts'

export function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

const Posts = ({ posts }) => {
  return (
    <Layout>
      <NextSeo title="Posts" />

      <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center">
        <div className="absolute top-11 right-9 md:top-10 md:right-12">
          <HamburgerMenu />
        </div>
        <div className="flex flex-col gap-2 pt-10 text-center md:gap-4">
          <h1 className="gradient-text-light font-monument text-4xl md:text-7xl">
            Posts
          </h1>
        </div>
        <div className="container mt-10 grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-6 md:px-6">
          {posts.length > 0 &&
            posts.map((post) => <Post key={post.slug} post={post} />)}
        </div>
      </div>
    </Layout>
  )
}

export default Posts
