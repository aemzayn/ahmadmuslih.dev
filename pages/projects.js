import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

const Projects = () => {
  return (
    <Layout>
      <NextSeo title="Projects" />

      <div className="flex min-h-screen relative items-center justify-start w-full h-full">
        <Link href="/">
          <a className="absolute top-5 right-5 tracking-widest">home</a>
        </Link>
        <div className="flex-1 text-center flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-7xl font-monument">Coming soon</h1>
          <h2 className="text-xl md:text-5xl font-mono text-gray-500">
            /projects
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
