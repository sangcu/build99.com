import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import DocumentationLayout from './Layout'

const Documentation: NextPage<{
  slug: string
  mdxSource: {
    compiledSource: string
  }
}> = ({ slug, mdxSource }) => {
  return (
    <DocumentationLayout slug={slug}>
      <article className="py-2 md:py-6 px-4 sm:px-6 md:px-8 prose">
        <MDXRemote {...mdxSource} />
      </article>
    </DocumentationLayout>
  )
}

export default Documentation
