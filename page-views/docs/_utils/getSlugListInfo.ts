import path from 'path'
import fs from 'fs'
import getSlugFromFileName from './getSlugFromFileName'
import getNameFromFileName from './getNameFromFileName'

const getSlugListInfo: (pathName: string) => {
  slugName: string
  name: string
  pathName: string
}[] = (pathName: string) =>
  fs
    .readdirSync(pathName)
    .filter((item) => item !== 'index.md')
    .reduce(
      (
        result: {
          slugName: string
          name: string
          pathName: string
        }[],
        fileName: string,
      ) => {
        const slugName = getSlugFromFileName(fileName)
        const name = getNameFromFileName(fileName)

        if (fileName.endsWith('.md')) {
          return [
            ...result,
            {
              slugName,
              name,
              pathName: path.join(pathName || '', fileName),
            },
          ]
        } else {
          const isContainIndexFile = fs.existsSync(
            path.join(path.join(pathName || '', fileName), 'index.md'),
          )

          return isContainIndexFile
            ? [
                ...result,
                {
                  slugName,
                  name,
                  pathName: path.join(
                    path.join(pathName || '', fileName),
                    'index.md',
                  ),
                },
                ...getSlugListInfo(path.join(pathName, fileName)),
              ]
            : [...result, ...getSlugListInfo(path.join(pathName, fileName))]
        }
      },
      [],
    )

export default getSlugListInfo
