import path from 'path'
import fs from 'fs'

const getSlugListInfo: (pathName: string) => {
  slugName: string
  pathName: string
}[] = (pathName: string) =>
  fs
    .readdirSync(pathName)
    .filter((item) => item !== 'index.md')
    .reduce(
      (
        result: {
          slugName: string
          pathName: string
        }[],
        item: string,
      ) => {
        if (item.endsWith('.md')) {
          return [
            ...result,
            {
              slugName: item,
              pathName: path.join(pathName || '', item),
            },
          ]
        } else {
          const isContainIndexFile = fs.existsSync(
            path.join(path.join(pathName || '', item), 'index.md'),
          )

          return isContainIndexFile
            ? [
                ...result,
                {
                  slugName: `${item}.md`,
                  pathName: path.join(
                    path.join(pathName || '', item),
                    'index.md',
                  ),
                },
                ...getSlugListInfo(path.join(pathName, item)),
              ]
            : [...result, ...getSlugListInfo(path.join(pathName, item))]
        }
      },
      [],
    )

export default getSlugListInfo
