export const trimFileName = (fileName: string) =>
  fileName
    .slice(fileName.indexOf('_') + 1, fileName.length)
    .replace(/\.md$/, '')

const getSlugFromFileName = (fileName: string) =>
  trimFileName(fileName).toLowerCase()

export default getSlugFromFileName
