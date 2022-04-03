import projects from 'data/projects.json'
import { IProject } from 'interfaces/Project'

export const getAllProjects = (limit?: number): IProject[] | [] => {
  const data = projects.map((p, id) => ({ ...p, id: id + 1 }))
  return limit ? data.slice(0, limit) : data
}
