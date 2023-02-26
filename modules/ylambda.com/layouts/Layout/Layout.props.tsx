import type { ReactNode } from 'react'

export default interface LayoutProps {
  children: JSX.Element
  renderHeader?: () => ReactNode
  renderMain?: () => ReactNode
  renderFooter?: () => ReactNode
}
