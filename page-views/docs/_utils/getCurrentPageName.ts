import { navigation } from '../constants'
import { INavItem } from '../types'

const flatNavigation: (arr: INavItem[]) => INavItem[] = (arr: INavItem[]) =>
  arr
    .map((item) => {
      return [item, ...(item?.children ? flatNavigation(item.children) : [])]
    })
    .flat()

const getCurrentPageName: (slug: string) => string = (slug: string) =>
  flatNavigation(navigation).find((x) => x.slug === slug)?.name || ''

export default getCurrentPageName
