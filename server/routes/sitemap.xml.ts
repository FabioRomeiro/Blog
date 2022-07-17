import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://www.fabioromeiro.dev'
  })

  const priorityMap = {
    '/': 1.0,
    '/posts': 0.9
  }

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      priority: priorityMap[doc._path],
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
