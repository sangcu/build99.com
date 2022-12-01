import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { POSTS_DIRECTORY } from '../constants'

const getPostData: (id: string) => Promise<{
  id: string
  date: string
  title: string
  description: string
  mdxSource: {
    compiledSource: string
  }
}> = async (id: string) => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const fileName = fileNames.find((fileName) => fileName.includes(id))

  const fullPath = path.join(POSTS_DIRECTORY, fileName as string)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const mdxSource = await serialize(matterResult.content)

  return {
    id,
    mdxSource: mdxSource as {
      compiledSource: string
    },
    ...(matterResult.data as {
      date: string
      title: string
      description: string
    }),
  }
}

export default getPostData
