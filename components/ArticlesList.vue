<template>
  <section v-once class="articles">
    <ol class="articles__list">
      <li
        v-for="post in articles"
        :key="post.title"
        class="articles__post"
      >
        <PostItem :post="post" />
      </li>
    </ol>
    <NuxtLink
      v-if="limit && articles && articles.length >= limit"
      to="/articles"
      class="articles__link"
    >
      <span>Ver todos os artigos</span>
      <Chevron />
    </NuxtLink>
  </section>
</template>

<script setup>
import { sortQueryResultsByDate } from '~/helpers/contentList'

const { limit } = defineProps({
  limit: Number
})

const allArticles = await queryContent('articles')
  .only(['title', 'description', 'publicationDate', 'tags', '_path'])
  .where({ _path: { $ne: '/articles' } })
  .find()

const articles = computed(() => {
  return sortQueryResultsByDate(allArticles, 'publicationDate').slice(0, limit)
})
</script>

<style lang="scss">
.articles {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: flex-end;
  }
}
</style>