import type { GetStaticPaths, GetStaticProps } from 'next'
import Documentation from 'page-views/docs'
import { getAllDocSlugs, getDocData } from 'page-views/docs/_utils'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDocSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params || {}

  const docsData = await getDocData(slug as string)
  const { title, description, ...rest } = docsData

  return {
    props: {
      title,
      description,
      ...rest,
    },
  }
}

export default Documentation
