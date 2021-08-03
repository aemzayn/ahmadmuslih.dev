import { AiOutlineGithub } from "react-icons/ai";

export default function FeaturedProject({ project }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full items-end text-right">
      <div className="font-bold flex items-center md:text-xl font-walkway">
        <span>{project.year} |</span>
        <a href={project.github} referrerPolicy="no-referrer">
          <AiOutlineGithub className="ml-2" />
        </a>
      </div>
      <h1 className="font-monument text-3xl md:text-7xl gradient-text">
        {project.name}
      </h1>
      <div className="w-full flex flex-col gap-4 max-w-lg text-sm md:text-base">
        <p>{project.description}</p>
      </div>
    </div>
  );
}
