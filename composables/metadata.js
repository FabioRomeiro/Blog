export function useMetadata (data) {
  const { title, link = [], meta = [] } = data
  
  const metaMap = mapMetatagArray(meta, ['property', 'name'])
  const linkMap = mapMetatagArray(link, ['rel'])

  const { canonical = linkMap.canonical?.href, description = metaMap.description?.content } = data

  const favicon = linkMap['icon']

  if (title) {
    metaMap['og:title'] = metaMap['og:title'] || {
      property: 'og:title',
      content: title
    }
  }

  if (description) {
    metaMap.description = metaMap.description || {
      name: 'description',
      content: description
    }
    metaMap['og:description'] = {
      property: 'description',
      content: description
    }
  }
  
  if (canonical) {
    linkMap.canonical = linkMap.canonical || {
      rel: 'canonical',
      href: canonical
    }

    metaMap['og:url'] = metaMap['og:url'] || {
      property: 'og:url',
      content: canonical
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

function mapMetatagArray (arr, keys) {
  const map = {}
  for (const item of arr) {
    const key = keys.find(k => !!item[k])
    map[item[key]] = item
  }
  return map
}
