import { DOCUMENTS_DIRECTORY } from '../constants'
import getSlugListInfo from './getSlugListInfo'

const getAllDocSlugs = () => {
  const allSlugInfo = getSlugListInfo(DOCUMENTS_DIRECTORY)
  return allSlugInfo.map((slug) => {
    return {
      params: {
        slug: slug.slugName.replace(/\.md$/, ''),
      },
    }
  })
}

export default getAllDocSlugs
