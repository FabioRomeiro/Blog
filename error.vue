<script setup>
const { error } = defineProps({
  error: {
    type: Object
  }
})

const is404Error = computed(() => error.statusCode === '404')

const errorTitle = computed(() => {
  if (is404Error.value) {
    return 'Página não encontrada'
  }

  return 'Ocorreu um erro'
})

const errorMessage = computed(() => {
  if (is404Error.value) {
    return 'A URL digitada não corresponde a nenhuma página do site, verifique se foi escrita corretamente 🤔'
  }

  return error.message
})

useHead(useMetadata({
  title: errorTitle.value,
  titleTemplate: '%s | Fábio Romeiro',
  meta: [
    { name: 'robots', content: 'NOINDEX, NOFOLLOW' },
  ],
  link: [
    { rel: 'icon', href: useFaviconPath(), type: 'image/x-icon' }
  ]
}))
</script>

<template>
  <NuxtLayout class="error-page">
    <p class="error-page__emoji">😢</p>
    <h1>{{ errorTitle }}</h1>
    <p>{{ errorMessage }}</p>
    <NuxtLink to="/">Ir para página inicial</NuxtLink>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error-page {
  &__emoji {
    font-size: 3em;
    margin-bottom: 0;
  }
}
</style>
