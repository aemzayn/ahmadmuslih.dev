import FeaturedProject from 'components/FeaturedProject'
import { IProject } from 'interfaces/Project'

export interface ProjectProps {
  projects: IProject[]
}

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="flex-1 bg-gradient-to-b from-black via-darkBlue to-darkBlue"
    >
      <div className="flex flex-col gap-10 px-5 py-20 pb-36">
        <div>
          <h1 className="title gradient-text-light ml-2 font-monument text-2xl md:ml-20 lg:ml-8 lg:text-4xl">
            Past projects —
          </h1>
        </div>
        <div className="mr-5 flex flex-col gap-20 pt-8 md:mr-20 md:gap-28 md:pt-16">
          {projects.map((project, id) => (
            <FeaturedProject key={id} project={project} delay={id + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
