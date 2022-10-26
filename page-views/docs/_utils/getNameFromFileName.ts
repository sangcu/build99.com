import { trimFileName } from './getSlugFromFileName'

const getNameFromFileName = (fileName: string) =>
  trimFileName(fileName).replace(/-/g, ' ')

export default getNameFromFileName
