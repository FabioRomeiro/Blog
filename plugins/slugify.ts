import slugify from 'slugify'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      slugify: text => slugify(text, { strict: true, lower: true })
    }
  }
})
