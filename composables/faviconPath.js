export function useFaviconPath () {
  const colorMode = useColorMode()
  return computed(() => `/favicon${colorMode.value === 'light' ? '-light' : ''}.svg`)
}
