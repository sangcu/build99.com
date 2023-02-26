import type { GetServerSideProps } from 'next'
import getSortedPostsData from 'page-views/blog/_utils/getSortedPostsData'
import { getAllDocSlugs } from 'page-views/docs/_utils'

const SiteMap: React.FC = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPostsData = getSortedPostsData()

  const postUrls = allPostsData.map((post) => `/blog/${post?.id}`)
  const allDocSlugs = getAllDocSlugs()
  const docUrls = allDocSlugs.map((docSlug) => `/docs/${docSlug?.slugName}`)

  const sitemap = generateSiteMap(['/', ...postUrls, ...docUrls, '/about'])

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${urls
       .map((url) => {
         return `
       <url>
           <loc>${`${process.env.BASE_URL}${url}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export default SiteMap
