import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://www.fabioromeiro.dev'
  })
  
  const priorityMap = {
    '/': 1.0,
    '/articles': 0.8,
    '/glossary': 0.8
  }
  
  const docs = await serverQueryContent(event).find()
  const pages = [
    { _path: '/' },
    { _path: '/articles' },
    { _path: '/glossary' },
    ...docs
  ]

  for (const page of pages) {
    sitemap.write({
      url: page._path,
      priority: priorityMap[page._path] || 0.9,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
