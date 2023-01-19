function stringToTime (str) {
  const [day, month, year] = str.split('/')
  return new Date(year, +month - 1, day).getTime()
}

export function sortQueryResultsByDate (queryResults, property) {
  return queryResults
    .map(item => ({
      ...item,
      _dateMs: stringToTime(item[property])
    }))
    .sort((a, b) => b._dateMs - a._dateMs)
}
