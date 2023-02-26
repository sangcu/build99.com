import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(
    `User-agent: *\nAllow: /\nSitemap: ${process.env.BASE_URL}/sitemap.xml`,
  )
}
