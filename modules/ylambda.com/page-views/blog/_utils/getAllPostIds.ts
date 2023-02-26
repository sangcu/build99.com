import fs from 'fs'
import { POSTS_DIRECTORY } from '../constants'

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName
          .slice(fileName.indexOf('_') + 1, fileName.length)
          .replace(/\.md$/, ''),
      },
    }
  })
}

export default getAllPostIds
