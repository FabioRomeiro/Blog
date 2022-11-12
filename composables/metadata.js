export function useMetadata (data) {
  const { title, link, meta } = data
  
  const metaMap = meta?.reduce((metaMap, meta) => {
    metaMap[meta.property || meta.name] = meta
    return metaMap
  }, {}) || {}

  const linkMap = link?.reduce((linkMap, link) => {
    linkMap[link.rel] = link
    return linkMap
  }, {}) || {}

  const canonicalContent = data.canonical || linkMap.canonical?.href
  const descriptionContent = data.description || metaMap.description?.content
  const favicon = linkMap['icon']

  if (title) {
    metaMap['og:title'] = metaMap['og:title'] || {
      property: 'og:title',
      content: title
    }
  }

  if (descriptionContent) {
    metaMap.description = metaMap.description || {
      name: 'description',
      content: descriptionContent
    }
    metaMap['og:description'] = {
      property: 'description',
      content: descriptionContent
    }
  }
  
  if (canonicalContent) {
    linkMap.canonical = linkMap.canonical || {
      rel: 'canonical',
      href: canonicalContent
    }

    metaMap['og:url'] = metaMap['og:url'] || {
      property: 'og:url',
      content: canonicalContent
    }
  }

  if (metaMap['og:image'] && (!metaMap['og:image:type'] || !metaMap['og:image:width'] || !metaMap['og:image:height'])) {
    throw Error('Metadata - Invalid image. Make sure the following metatags are included as well: "og:image:type", "og:image:width" and "og:image:height"')
  }

  if (favicon) {
    linkMap['shortcut icon'] = linkMap['shortcut icon'] || {
      ...favicon,
      rel: 'shortcut icon'
    }
  }

  return {
    ...data,
    title,
    link: Object.values(linkMap),
    meta: Object.values(metaMap)
  }
}
