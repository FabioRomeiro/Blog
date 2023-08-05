<script setup>
const head = useMetadata({
  title: 'Desenvolvedor Front-end',
  description: 'Me chamo Fábio Romeiro, trabalho como desenvolvedor web a 5 anos. Escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
  canonical: 'https://fabioromeiro.dev'
})
useHead(head)
</script>

<template>
  <main class="blog">
    <section class="blog__section">
      <h2>Glossário</h2>
      <GlossaryItemsList :limit="20" />
    </section>
  </main>
</template>
