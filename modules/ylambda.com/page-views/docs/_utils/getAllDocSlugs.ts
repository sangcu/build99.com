import { DOCUMENTS_DIRECTORY } from '../constants'
import getSlugListInfo from './getSlugListInfo'

const getAllDocSlugs = () => getSlugListInfo(DOCUMENTS_DIRECTORY)

export default getAllDocSlugs
