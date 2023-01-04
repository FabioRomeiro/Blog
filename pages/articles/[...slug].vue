<script setup>
const { path } = useRoute()

const post = await queryContent('articles').where({ _path: usePathCleaner(path) }).findOne()

useHead(() => useMetadata({
  canonical: `https://fabioromeiro.dev${path}`,
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'og:image', itemprop: 'image', content: post.cover?.src },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '627' },
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
        to="/articles"
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
      <img
        v-if="post.cover"
        class="article__cover"
        :src="post.cover.src"
        :alt="post.cover.alt"
      >
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

  &__cover {
    width: 100%;
    object-fit: cover;
    margin-bottom: 16px;
    max-height: 400px;
    border-radius: 4px;
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
