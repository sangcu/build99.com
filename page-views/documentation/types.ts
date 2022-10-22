export interface INavItem {
  name: string
  slug: string
  children?: INavItem[]
  level?: number
  currentSlug?: string
}
