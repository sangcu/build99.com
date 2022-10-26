import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import DocumentationLayout from './Layout'
import { INavItem } from './types'

const Documentation: NextPage<{
  slug: string
  mdxSource: {
    compiledSource: string
  }
  navigations: INavItem[]
  name?: string
}> = ({ slug, name, mdxSource, navigations }) => {
  return (
    <DocumentationLayout slug={slug} name={name} navigations={navigations}>
      <article className="py-2 md:py-6 px-4 sm:px-6 md:px-8 prose">
        <MDXRemote {...mdxSource} />
      </article>
    </DocumentationLayout>
  )
}

export default Documentation
