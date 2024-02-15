<script setup>
definePageMeta({ layout: "" });

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
  // title: errorTitle.value,
  title: 'In construction',
  titleTemplate: '%s | Fábio Romeiro',
  meta: [
    { name: 'robots', content: 'NOINDEX, NOFOLLOW' },
  ],
  link: [
    { rel: 'icon', href: useFaviconPath(), type: 'image/x-icon' }
  ]
}))

import pro from '~/assets/temp/pro.jpeg'
import winking from '~/assets/temp/winking.jpeg'
import sad from '~/assets/temp/sad.jpeg'

const imageElement = ref(null)

const catImage = ref(pro)

function updateCatImage() {
  if (imageElement.value?.matches(':hover')) {
    catImage.value = winking
  } else {
    catImage.value = pro
  }
}

onBeforeMount(() => {
  document.addEventListener('mouseleave', () => {
    catImage.value = sad
  })
  document.addEventListener('mouseenter', () => {
    catImage.value = pro
  })
})
</script>

<template>
  <div class="temp" @mousemove="updateCatImage">
    <h1>In construction</h1>
    <img ref="imageElement" :src="catImage" alt="Cat" class="temp__image">
  </div>
  <!-- <NuxtLayout class="error-page">
    <p class="error-page__emoji">😢</p>
    <h1>{{ errorTitle }}</h1>
    <p>{{ errorMessage }}</p>
    <NuxtLink to="/">Ir para página inicial</NuxtLink>
  </NuxtLayout> -->
</template>

<style lang="scss" scoped>
.error-page {
  &__emoji {
    font-size: 3em;
    margin-bottom: 0;
  }
}

.temp {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
  background-color: white;
  color: black;

  &__image {
    max-height: 200px;
  }
}
</style>
