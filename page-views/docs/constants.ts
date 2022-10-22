import path from 'path'
import { INavItem } from './types'

export const DOCUMENTS_DIRECTORY = path.join(
  process.cwd(),
  'page-views/docs/_contents',
)

export const DEFAULT_SLUG = 'introduction'

export const navigation: INavItem[] = [
  {
    name: 'Introduction',
    slug: 'introduction',
    children: [
      { name: 'Getting started', slug: 'getting-started' },
      {
        name: 'Home 1.2',
        slug: 'home-12',
        children: [
          { name: 'Home 1.2.1', slug: 'home-121' },
          { name: 'Home 1.2.2', slug: 'home-122' },
        ],
      },
    ],
  },
  {
    name: 'Sample 1',
    slug: 'sample-1',
    children: [
      { name: 'Sample 1.1', slug: 'sample-11' },
      { name: 'Sample 1.2', slug: 'sample-12' },
    ],
  },
  { name: 'Sample 2', slug: 'sample-2' },
  { name: 'Sample 3', slug: 'sample-3' },
  { name: 'Sample 4', slug: 'sample-4' },
  { name: 'Sample 5', slug: 'sample-5' },
]
