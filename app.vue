<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import picture from '~/assets/images/FabioRomeiro2.jpg'

const head = useMetadata({
  title: 'Desenvolvedor Front-end',
  titleTemplate: '%s | Fábio Romeiro',
  description: 'Artigos sobre tecnologia para simplificar o que pode ser desnecessariamente complicado. Conteúdos sobre Javascript, Vue.js, Nuxt.js e CSS.',
  meta: [
    { name: 'author', content: 'Fabio Romeiro' },
    { name: 'publisher', content: 'https://fabioromeiro.dev' },
    { name: 'robots', content: 'INDEX, FOLLOW' },
    { property: 'og:site_name', content: 'Fábio Romeiro' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', itemprop: 'image', content: picture },
    { name: 'msapplication-TileImage', content: picture },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:image:width', content: '990' },
    { property: 'og:image:height', content: '990' }
  ],
  link: [
    { rel: 'icon', href: useFaviconPath(), type: 'image/x-icon' }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})

useHead(head)
</script>
