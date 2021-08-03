import FeaturedProject from "./FeaturedProject";

const data = [
  {
    id: 1,
    year: 2021,
    name: "Ya! Magazine",
    site: "https://ya-magazine.com/",
    description: "Website for Ya! Magazine Media News company",
    github: "https://github.com/aemzayn/ya-magz",
  },
  {
    id: 2,
    year: 2021,
    name: "SAE 2021",
    site: "http://sae-2021.vercel.app/",
    description:
      "Website for Overseas Indonesian Student’s Association Alliance America-Europe Region (OISAA) Symposium 2021",
    github: "https://github.com/aemzayn/sae-2021",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col px-5 w-full gap-10 py-10 min-h-screen bg-gradient-to-b from-black to-darkBlue">
      <h1 className="title font-monument text-4xl mt-20 md:mt-40 ml-8 md:ml-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">
        Past projects
      </h1>
      <div className="py-8 md:py-16 mr-5 md:mr-20 flex flex-col gap-20 md:gap-28">
        {data.map((project, id) => (
          <FeaturedProject key={id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
