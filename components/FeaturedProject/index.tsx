import { AiOutlineGithub } from 'react-icons/ai'
import PropTypes from 'prop-types'

export default function FeaturedProject({ project, delay }) {
  return (
    <div className="flex w-full flex-col items-end gap-2 text-right md:gap-4">
      <div className="flex items-center font-walkway font-bold md:text-xl">
        <span>{project?.year}</span>
        {project?.github && (
          <a
            href={project?.github}
            className="ml-2 flex items-center text-white"
            referrerPolicy="no-referrer"
          >
            | <AiOutlineGithub className="ml-2" />
          </a>
        )}
      </div>
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed={-0.5 * delay}
        data-scroll-target="#projects"
        data-scroll-call="dynamicColor"
        className="gradient-text-light font-monument text-3xl md:text-7xl"
      >
        {project?.name}
      </h1>
      <div className="flex w-full max-w-lg flex-col gap-4 text-sm md:text-base">
        <p>{project?.description}</p>
      </div>
    </div>
  )
}

FeaturedProject.propTypes = {
  delay: PropTypes.number.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
}
