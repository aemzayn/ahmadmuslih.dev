import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

const Blog = () => {
  return (
    <Layout>
      <NextSeo title="Blog" />

      <div className="relative flex min-h-screen items-center justify-start w-full h-full">
        <Link href="/">
          <a className="absolute top-5 right-5 tracking-widest">home</a>
        </Link>
        <div className="flex-1 text-center flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-7xl font-monument">Coming soon</h1>
          <h2 className="text-xl md:text-5xl font-mono text-gray-500">/blog</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
