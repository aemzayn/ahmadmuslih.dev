import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

const Projects = () => {
  return (
    <Layout>
      <NextSeo title="Projects" />

      <div className="relative flex h-full min-h-screen w-full items-center justify-start">
        <Link href="/">
          <a className="absolute top-5 right-5 tracking-widest">home</a>
        </Link>
        <div className="flex flex-1 flex-col gap-2 text-center md:gap-4">
          <h1 className="font-monument text-3xl md:text-7xl">Coming soon</h1>
          <h2 className="font-mono text-xl text-gray-500 md:text-5xl">
            /projects
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
