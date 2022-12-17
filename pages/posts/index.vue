<script setup>
const head = useMetadata({
  title: 'Artigos sobre tecnologia',
  description: 'Artigos sobre tecnologia para simplificar o que pode ser desnecessariamente complicado. Conteúdos sobre Javascript, Vue.js, Nuxt.js e CSS.',
  canonical: 'https://fabioromeiro.dev/posts'
})

useHead(head)
</script>


<template>
  <main>
    <h1>Artigos</h1> 
    <Posts />
  </main>
</template>
