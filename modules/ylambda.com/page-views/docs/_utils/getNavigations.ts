import path from 'path'
import { INavItem } from '../types'
import fs from 'fs'
import getNameFromFileName from './getNameFromFileName'
import getSlugFromFileName from './getSlugFromFileName'

const getNavigations: (pathName: string) => INavItem[] = (pathName: string) =>
  fs
    .readdirSync(pathName)
    .filter((fileName) => fileName !== 'index.md')
    .reduce((result: INavItem[], fileName: string) => {
      const name = getNameFromFileName(fileName)
      const slug = getSlugFromFileName(fileName)

      if (fileName.endsWith('.md')) {
        return [
          ...result,
          {
            name,
            slug,
          },
        ]
      } else {
        const isContainIndexFile = fs.existsSync(
          path.join(path.join(pathName || '', fileName), 'index.md'),
        )

        return [
          ...result,
          {
            name,
            slug: isContainIndexFile ? slug : null,
            children: getNavigations(path.join(pathName, fileName)),
          },
        ]
      }
    }, [])

export default getNavigations
