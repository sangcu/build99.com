import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DOCUMENTS_DIRECTORY } from '../constants'

const getDocsData = () => {
  const fileNames = fs.readdirSync(DOCUMENTS_DIRECTORY)
  const allDocsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(DOCUMENTS_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })
  return allDocsData
}

export default getDocsData
