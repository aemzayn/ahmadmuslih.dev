import { IRoute } from 'interfaces/Route'

export const home: string = '/'
export const posts: string = '/p'
export const projects: string = '/projects'

export const ROUTES: IRoute[] = [
  { label: 'Home', route: home },
  { label: 'Posts', route: posts },
  { label: 'Projects', route: projects },
]
