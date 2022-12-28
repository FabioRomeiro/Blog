<script setup>
const { path } = useRoute()

const item = await queryContent('glossary').where({ _path: usePathCleaner(path) }).findOne()

useHead(() => useMetadata({
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
    v-if="item"
    class="glossary-item"
  >
    <header class="glossary-item__header">
      <NuxtLink
        class="glossary-item__link"
        to="/glossary"
      >
        <Chevron left />
        Ver todo o glossário
      </NuxtLink>
      <h1 class="glossary-item__title">
        {{ item.title }}
      </h1>
      <div class="glossary-item__info">
        <TagsList v-if="item && item.tags" :tags="item.tags" />
        <span class="glossary-item__date">
          Publicado em: {{ item.publicationDate }}
        </span>
      </div>
    </header>
    <main class="glossary-item__content">
      <ContentDoc id="content"></ContentDoc>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.glossary-item {
  &__header {
    margin-bottom: 32px;
  }

  &__title {
    margin-bottom: 8px;
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
