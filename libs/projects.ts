const data = [
  {
    id: 1,
    year: 2021,
    name: 'Ya! Magazine',
    site: 'https://ya-magazine.com/',
    description:
      'Website for Ya! Magazine Media News company. Built with Next Js, Chakra UI and Strapi CMS.',
    github: 'https://github.com/aemzayn/ya-magz',
  },
  {
    id: 2,
    year: 2021,
    name: 'SAE 2021',
    site: 'http://sae-2021.vercel.app/',
    description:
      'Website for Overseas Indonesian Student’s Association Alliance America-Europe Region (OISAA) Symposium 2021, Developed using Next Js and Chakra UI.',
    github: 'https://github.com/aemzayn/sae-2021',
  },
  {
    id: 3,
    year: 2020,
    name: 'PPI Turki Election',
    site: '',
    description:
      'Election (voting) Fullstack application built using React Js, Express, MongoDB and hosted on Digital Ocean.',
    github: 'https://github.com/aemzayn/pemilu-app',
  },
]

export const getAllProjects = () => {
  return data
}
