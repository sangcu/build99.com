import type { GetStaticProps } from 'next'
import BlogList from 'page-views/blog'
import getSortedPostsData from 'page-views/blog/_utils/getSortedPostsData'
import { dehydrate, QueryClient } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  const allPostsData = getSortedPostsData()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      allPostsData,
      title:
        'yLamda blog posts - all the latest yLamda news, straight from the team.',
      description: 'All the latest yLamda news, straight from the team.',
    },
  }
}

export default BlogList
