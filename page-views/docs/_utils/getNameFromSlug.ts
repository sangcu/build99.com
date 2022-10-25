import { capitalize } from 'lodash'

const getNameFromSlug = (slug: string) =>
  capitalize(slug.slice(2, slug.length).replace(/-/g, ' '))

export default getNameFromSlug
