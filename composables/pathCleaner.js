export function usePathCleaner (path) {
  return path?.replace(/\/$/, '')
}
