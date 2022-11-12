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

  const canonical = data.canonical || linkMap['canonical']
  const description = data.description || metaMap['description']
  const favicon = linkMap['icon']

  if (title) {
    metaMap['og:title'] = metaMap['og:title'] || {
      property: 'og:title',
      content: title
    }
  }

  if (description) {
    metaMap['og:description'] = metaMap['og:description'] || {
      property: 'og:description',
      content: description.content || description
    }
  }
  
  if (canonical) {
    linkMap['canonical'] = linkMap['canonical'] || {
      rel: 'canonical',
      href: canonical
    }

    metaMap['og:url'] = metaMap['og:url'] || {
      property: 'og:url',
      content: canonical.href || canonical
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
