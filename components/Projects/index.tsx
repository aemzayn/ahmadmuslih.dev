import { getAllProjects } from 'libs/projects'
import Contact from '../Contact'
import FeaturedProject from 'components/FeaturedProject'

const Projects = () => {
  const projects = getAllProjects()
  return (
    <section
      id="projects"
      data-scroll-section
      className="max-h-screen flex-1 bg-gradient-to-b from-black via-darkBlue to-darkBlue pt-20"
    >
      <div
        data-scroll-sticky
        data-scroll
        data-scroll-position="#projects"
        className="flex flex-col gap-10 px-5 py-20 pb-36"
      >
        <div
          data-scroll
          data-scroll-speed={-7}
          data-scroll-target="#projects"
          data-scroll-position="top"
        >
          <h1 className="title gradient-text-light ml-8 font-monument text-4xl md:mt-40 md:ml-20">
            Past projects —
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-target="#projects"
          data-scroll-speed={0.5}
          className="mr-5 flex flex-col gap-20 pt-8 md:mr-20 md:gap-28 md:pt-16"
        >
          {projects.map((project, id) => (
            <FeaturedProject key={id} project={project} delay={id + 1} />
          ))}
        </div>
      </div>
      <div className="px-10 pt-20 pb-10">
        <span about="Author name copyright">
          Ahmad Muslih Zain (c) {new Date().getFullYear()}
        </span>
      </div>
    </section>
  )
}

export default Projects
