<script setup>
const head = useMetadata({
  title: 'Termos e conceitos do mundo da tecnologia',
  description: 'Termos e conceitos do mundo da tecnologia resumidos para simplificar o que pode ser desnecessariamente complicado. Conteúdos sobre Javascript, Vue.js, Nuxt.js e CSS.',
  canonical: 'https://fabioromeiro.dev/glossary'
})

useHead(head)
</script>

<template>
  <main>
    <h1>Glossário</h1> 
    <GlossaryItemsList />
  </main>
</template>
