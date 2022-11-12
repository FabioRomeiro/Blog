<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import picture from '~/assets/images/FabioRomeiro2.jpg'

const colorMode = useColorMode()
const faviconPath = computed(() => `/favicon${colorMode.value === 'light' ? '-light' : ''}.svg`)

const head = useMetadata({
  title: 'Desenvolvedor Front-end',
  titleTemplate: '%s | Fábio Romeiro',
  meta: [
    {
      name: 'description',
      content: 'Artigos sobre tecnologia para simplificar o que pode ser desnecessariamente complicado. Conteúdos sobre Javascript, Vue.js, Nuxt.js e CSS.'
    },
    {
      name: 'author',
      content: 'Fabio Romeiro'
    },
    {
      name: 'robots',
      content: 'INDEX, FOLLOW'
    },
    { property: 'og:site_name', content: 'Fábio Romeiro' },
    { property: 'og:image', itemprop: 'image', content: picture },
    { name: 'msapplication-TileImage', content: picture },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:image:width', content: '990' },
    { property: 'og:image:height', content: '990' }
  ],
  link: [
    {
      rel: 'icon',
      href: faviconPath,
      type: 'image/x-icon'
    }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})

useHead(head)
</script>
