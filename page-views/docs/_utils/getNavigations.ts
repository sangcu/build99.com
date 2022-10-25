import path from 'path'
import { INavItem } from '../types'
import fs from 'fs'
import getNameFromSlug from './getNameFromSlug'

const getNavigations: (pathName: string) => INavItem[] = (pathName: string) =>
  fs
    .readdirSync(pathName)
    .filter((item) => item !== 'index.md')
    .reduce((result: INavItem[], item: string) => {
      const slug = item.replace(/\.md$/, '')

      if (item.endsWith('.md')) {
        return [
          ...result,
          {
            name: getNameFromSlug(slug),
            slug,
          },
        ]
      } else {
        const isContainIndexFile = fs.existsSync(
          path.join(path.join(pathName || '', item), 'index.md'),
        )

        return [
          ...result,
          {
            name: getNameFromSlug(slug),
            slug: isContainIndexFile ? slug : null,
            children: getNavigations(path.join(pathName, item)),
          },
        ]
      }
    }, [])

export default getNavigations
