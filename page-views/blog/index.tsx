import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const BlogList: NextPage<{
  allPostsData: {
    id: string
    date: string
    title: string
    introduction: string
  }[]
}> = ({ allPostsData }) => {
  const { t } = useTranslation()
  return (
    <div className="bg-transparent pt-16 pb-20">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('Recent posts')}
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              {t(
                'Latest updates on building in public, straight from the team.',
              )}
            </p>
          </div>
          {!allPostsData || allPostsData.length === 0 ? (
            <div className="mt-6 pt-10 text-center text-gray-500">
              {t('There is no posts now. we will update soon!!!')}
            </div>
          ) : (
            <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {allPostsData.map((post) => (
                <div key={post.title}>
                  <p className="text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-2">
                      {post.introduction}
                    </p>
                  </a>
                  <div className="mt-3">
                    <Link href={`/blog/${post.id}`}>
                      <a className="text-base font-semibold text-orange-600 hover:text-orange-500">
                        {t('Read full')}
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogList
