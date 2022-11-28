import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'

const PostDetail: NextPage<{
  postData: any
}> = ({ postData }) => {
  return (
    <div className="bg-transparent pt-16 pb-20">
      <div className="relative overflow-hidden">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-6xl font-extrabold text-center">
            {postData.title}
          </h1>
          <div className="mt-2 text-gray-400 text-base font-light text-center">
            <time dateTime={postData.date}>
              {dayjs(postData.date).format('LL')}
            </time>
          </div>
          <div className="min-w-full mt-8 prose lg:prose-lg">
            <MDXRemote {...postData?.mdxSource} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default PostDetail
