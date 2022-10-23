import fs from 'fs'
import { DOCUMENTS_DIRECTORY } from '../constants'

const getAllDocSlugs = () => {
  const fileNames = fs.readdirSync(DOCUMENTS_DIRECTORY)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export default getAllDocSlugs
