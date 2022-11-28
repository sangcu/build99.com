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
        'yLambda Blog - Build in public, straight from the team',
      description: 'Get latest news, techniques and market from yLambda',
    },
  }
}

export default BlogList
