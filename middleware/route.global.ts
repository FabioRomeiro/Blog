export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path && process.client) {
    setTimeout(() => window.scrollTo(0, 0), 100)
  }
})
