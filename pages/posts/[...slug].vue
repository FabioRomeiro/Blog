<script setup>
const { path } = useRoute()

const post = await queryContent().where({ _path: usePathCleaner(path) }).findOne()

useHead(() => useMetadata({
  title: post.title,
  description: post.description,
  canonical: `https://fabioromeiro.dev${path}`,
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'article:author', content: 'Fábio Romeiro' },
    { property: 'article:publisher', content: 'https://fabioromeiro.dev' }
  ]
}))
</script>

<template>
  <div
    v-if="post"
    class="article"
  >
    <header class="article__header">
      <NuxtLink
        class="article__link"
        to="/posts"
      >
        <Chevron left />
        Ver todos os artigos
      </NuxtLink>
      <h1 class="article__title">
        {{ post.title }}
      </h1>
      <p class="article__description">
        {{ post.description }}
      </p>
      <div class="article__info">
        <TagsList v-if="post && post.tags" :tags="post.tags" />
        <span class="article__date">
          Publicado em: {{ post.publicationDate }}
        </span>
      </div>
    </header>
    <main class="article__content">
      <ContentDoc id="content"></ContentDoc>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.article {
  &__header {
    margin-bottom: 32px;
  }

  &__title {
    margin-bottom: 8px;
  }

  &__description {
    opacity: .8;
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

    &::v-deep(div > *:first-child) {
      margin-top: 0;
    }
  }
}
</style>
