import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { IPost } from 'interfaces/Post'

export const postsDirectory: string = join(process.cwd(), '__posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string): IPost | {} => {
  if (!slug) {
    return {}
  }
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    ...data,
    slug: data.slug ?? realSlug,
    content,
  } as IPost
}

export function getAllPosts(): IPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1: IPost, post2: IPost) =>
      post1.createdAt > post2.createdAt ? -1 : 1
    )

  return posts as IPost[]
}
