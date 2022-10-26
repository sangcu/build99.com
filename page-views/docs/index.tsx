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
      <article className="pt-2 pb-8 md:pt-6 md:pb-6 px-4 sm:px-6 md:px-8 prose">
        <MDXRemote {...mdxSource} />
      </article>
    </DocumentationLayout>
  )
}

export default Documentation
