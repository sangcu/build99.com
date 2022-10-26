import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { DOCUMENTS_DIRECTORY } from '../constants'
import getSlugListInfo from './getSlugListInfo'

const getDocData = async (slug: string) => {
  const allSlugInfo = getSlugListInfo(DOCUMENTS_DIRECTORY)
  const slugInfo = allSlugInfo.find((item) => item.slugName === slug)

  const fileContents = fs.readFileSync(slugInfo?.pathName || '', 'utf8')

  const matterResult = matter(fileContents)

  const mdxSource = await serialize(matterResult.content)

  return {
    slug,
    name: slugInfo?.name,
    mdxSource,
    ...(matterResult.data as {
      title: string
      description: string
    }),
  }
}

export default getDocData
