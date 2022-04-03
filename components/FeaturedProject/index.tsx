import { AiOutlineGithub } from 'react-icons/ai'
import { IProject } from 'interfaces/Project'

export interface FeaturedProjectProps {
  project: IProject
  delay?: number
}

export default function FeaturedProject({
  project,
  delay,
}: FeaturedProjectProps) {
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
      <h1 className="gradient-text-light font-monument text-3xl md:text-7xl">
        {project?.name}
      </h1>
      <div className="flex w-full max-w-lg flex-col gap-4 text-sm md:text-base">
        <p>{project?.description}</p>
      </div>
    </div>
  )
}
