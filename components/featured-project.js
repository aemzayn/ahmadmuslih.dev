import { AiOutlineGithub } from 'react-icons/ai'
import PropTypes from 'prop-types'

export default function FeaturedProject({ project, delay }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full items-end text-right">
      <div className="font-bold flex items-center md:text-xl font-walkway">
        <span>{project?.year}</span>
        {project?.github && (
          <a
            href={project?.github}
            className="flex items-center ml-2 text-white"
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
        className="font-monument text-3xl md:text-7xl gradient-text-light"
      >
        {project?.name}
      </h1>
      <div className="w-full flex flex-col gap-4 max-w-lg text-sm md:text-base">
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
    github: PropTypes.string
  }).isRequired
}
