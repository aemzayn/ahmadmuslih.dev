import { NextSeo } from 'next-seo'
import HamburgerMenu from '@/components/hamburger-menu'
import Layout from '@/components/layout'
import Post from '@/components/post'

const Blog = () => {
  return (
    <Layout>
      <NextSeo title="Blog" />

      <div className="relative flex flex-col min-h-screen items-center justify-center w-full h-full">
        <div className="absolute top-11 right-9 md:top-10 md:right-12">
          <HamburgerMenu />
        </div>
        <div className="pt-10 text-center flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl md:text-7xl font-monument gradient-text-light">
            Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 p-4 md:px-6 gap-4 md:gap-6 md:grid-cols-3 container mt-10">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
