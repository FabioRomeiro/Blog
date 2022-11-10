<template>
  <section v-once class="posts">
    <ol class="posts__list">
      <li
        v-for="post in posts"
        :key="post.title"
        class="posts__post"
      >
        <PostItem :post="post" />
      </li>
    </ol>
    <NuxtLink
      v-if="limit && posts && posts.length >= limit"
      to="/posts"
      class="posts__link"
    >
      <span>Ver todos os artigos</span>
      <Chevron />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { limit } = defineProps({
  limit: Number
})

const { data: posts } = useAsyncData(() => {
  return queryContent('/posts')
  .only(['title', 'description', 'publicationDate', 'tags', '_path'])
  .where({ _path: { $ne: '/posts' } })
  .sort({ publicationDate: 1 })
  .limit(limit)
  .find()
})
</script>

<style lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
  }

  &__post {
    list-style: none;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: flex-end;
  }
}
</style>