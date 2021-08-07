import Contact from './contact'
import FeaturedProject from './featured-project'

const data = [
  {
    id: 1,
    year: 2021,
    name: 'Ya! Magazine',
    site: 'https://ya-magazine.com/',
    description:
      'Website for Ya! Magazine Media News company. Built with Next Js, Chakra UI and Strapi CMS.',
    github: 'https://github.com/aemzayn/ya-magz'
  },
  {
    id: 2,
    year: 2021,
    name: 'SAE 2021',
    site: 'http://sae-2021.vercel.app/',
    description:
      'Website for Overseas Indonesian Student’s Association Alliance America-Europe Region (OISAA) Symposium 2021, Developed using Next Js and Chakra UI.',
    github: 'https://github.com/aemzayn/sae-2021'
  },
  {
    id: 3,
    year: 2020,
    name: 'PPI Turki Election',
    site: '',
    description:
      'Election (voting) Fullstack application built using React Js, Express, MongoDB and hosted on Digital Ocean.',
    github: 'https://github.com/aemzayn/pemilu-app'
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      data-scroll-section
      className="flex-1 pt-20 bg-gradient-to-b from-black via-darkBlue to-darkBlue max-h-screen"
    >
      <div
        data-scroll-sticky
        data-scroll
        data-scroll-position="#projects"
        className="flex flex-col px-5 gap-10 py-20 pb-36"
      >
        <div
          data-scroll
          data-scroll-speed={-7}
          data-scroll-target="#projects"
          data-scroll-position="top"
        >
          <h1 className="title font-monument text-4xl md:mt-40 ml-8 md:ml-20 gradient-text-light">
            Past projects —
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-target="#projects"
          data-scroll-speed={0.5}
          className="pt-8 md:pt-16 mr-5 md:mr-20 flex flex-col gap-20 md:gap-28"
        >
          {data.map((project, id) => (
            <FeaturedProject key={id} project={project} delay={id + 1} />
          ))}
        </div>
      </div>
      <div className="px-10 pt-20 pb-10">
        <Contact />
      </div>
    </section>
  )
}

export default Projects
