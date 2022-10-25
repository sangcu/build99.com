import type { GetStaticPaths, GetStaticProps } from 'next'
import Documentation from 'page-views/docs'
import { DOCUMENTS_DIRECTORY } from 'page-views/docs/constants'
import { getAllDocSlugs, getDocData } from 'page-views/docs/_utils'
import getNavigations from 'page-views/docs/_utils/getNavigations'

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

  const navigations = getNavigations(DOCUMENTS_DIRECTORY)

  return {
    props: {
      title,
      description,
      navigations,
      ...rest,
    },
  }
}

export default Documentation
