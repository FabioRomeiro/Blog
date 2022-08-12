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
    '@/assets/css/reset.css',
    '@/assets/css/fonts.css',
    '@/assets/css/variables.css',
    '@/assets/css/global.css'
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
