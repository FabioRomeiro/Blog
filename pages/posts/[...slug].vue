<script setup>
const { path } = useRoute()

const { data: post } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

useHead({
  title: post.title,
  description: post.description,
  link: [
    { rel: 'canonical', href: `https://fabioromeiro.dev${path}` }
  ]
})
</script>

<template>
  <div>
    <ContentDoc></ContentDoc>
  </div>
</template>
