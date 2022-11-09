import { dehydrate, QueryClient } from 'react-query'
import type { GetStaticPaths, GetStaticProps } from 'next'

import getAllPostIds from 'page-views/blog/_utils/getAllPostIds'
import getPostData from 'page-views/blog/_utils/getPostData'
import PostDetail from 'page-views/blog/[id]'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {}

  const postData = await getPostData(id as string)

  const { title, description } = postData
  const queryClient = new QueryClient()

  return {
    props: {
      title,
      description,
      postData: postData,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default PostDetail
