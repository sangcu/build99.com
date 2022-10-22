import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { DOCUMENTS_DIRECTORY } from '../constants'

const getDocData = async (slug: string) => {
  const fullPath = path.join(DOCUMENTS_DIRECTORY, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const mdxSource = await serialize(matterResult.content)

  return {
    slug,
    mdxSource,
    ...(matterResult.data as {
      title: string
      description: string
    }),
  }
}

export default getDocData
