import fs from 'fs'
import { POSTS_DIRECTORY } from '../constants'

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)

  return fileNames
    .filter((fileName) => fileName !== 'sample.md')
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    })
}

export default getAllPostIds
