import fs from 'fs'
import matter from 'gray-matter'
import { orderBy } from 'lodash'
import path from 'path'

import { POSTS_DIRECTORY } from '../constants'

const getSortedPostsData: () => {
  id: string
  date: string
  title: string
  introduction: string
}[] = () => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const allPostsData = fileNames
    .filter((fileName) => fileName !== 'sample.md')
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '')

      const fullPath = path.join(POSTS_DIRECTORY, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)

      return {
        id,
        ...(matterResult.data as {
          date: string
          title: string
          introduction: string
        }),
      }
    })
  return orderBy(allPostsData, 'date', 'desc')
}

export default getSortedPostsData
