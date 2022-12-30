export default defineNuxtRouteMiddleware(to => {
  if (to.path.indexOf('/posts') === 0) {
    return navigateTo(to.path.replace('/posts', '/articles'), { redirectCode: 301 })
  }
})
