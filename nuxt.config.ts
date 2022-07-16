import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/fonts.css',
    '@/assets/css/global.css'
  ],
  colorMode: {
    fallback: 'dark'
  }
})
