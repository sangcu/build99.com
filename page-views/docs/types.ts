export interface INavItem {
  name: string
  slug?: string | null
  children?: INavItem[]
  level?: number
  currentSlug?: string
  onItemClick?: (name: string) => void
}
