import Layout from 'components/Layout'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import { getAllProjects } from 'libs/projects'
import { IProject } from 'interfaces/Project'
import About from 'components/About'
import Contact from 'components/Contact'

export interface IndexPageProps {
  projects: IProject[]
}

export default function Index({ projects }: IndexPageProps) {
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
    </Layout>
  )
}

export function getStaticProps() {
  const projects = getAllProjects()
  return {
    props: { projects },
  }
}
