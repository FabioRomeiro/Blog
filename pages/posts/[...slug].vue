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
  <div class="article">
    <header class="article__header">
      <NuxtLink
        class="article__link"
        to="/posts"
      >
        <Chevron left />
        Ver todos os artigos
      </NuxtLink>
      <h1>
        {{ post.title }}
      </h1>
      <div class="article__info">
        <TagsList :tags="post.tags" />
        <span class="article__date">
          Publicado em: {{ post.publicationDate }}
        </span>
      </div>
    </header>
    <main class="article__content">
      <ContentDoc></ContentDoc>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.article {
  &__header {
    margin-bottom: 32px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    @media (min-width: 500px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__date {
    opacity: .7;
  }

  &__link {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 16px;
  }

  &__content {
    padding: 16px;
    border-radius: 3px;
    background-color: var(--secondary-color);
    box-shadow: 0 0 0 1px var(--contrast-color-light);
    
    @media (min-width: 500px) {
      padding: 24px;
    }

    &::v-deep(:first-child) {
      margin-top: 0;
    }
  }
}
</style>
