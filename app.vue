<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Desenvolvedor Front-end',
  titleTemplate: '%s | Fábio Romeiro',
  meta: [
    {
      name: 'description',
      content: 'Artigos sobre tecnologia para simplificar o que pode ser desnecessariamente complicado. Conteúdos sobre Javascript, Vue.js, Nuxt.js e CSS.'
    }
  ]
})
</script>
