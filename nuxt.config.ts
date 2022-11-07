import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    navigation: {
      fields: ['icon']
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  css: [
    '@/assets/css/style.scss'
  ],
  colorMode: {
    preference: 'dark'
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  hooks: {
    'build:before': () => {
      import('./plugins/fontAwesome/sprite')
    }
  }
})
