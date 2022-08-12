<template>
  <section v-once class="last-posts">
    <ol class="last-posts__list">
      <li
        v-for="post in posts"
        :key="post.title"
        class="last-posts__post"
      >
        <PostItem :post="post" />
      </li>
    </ol>
    <NuxtLink
      to="/posts"
      class="last-posts__link"
    >
      <span>Ver todos os artigos</span>
      <Chevron />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
  .only(['title', 'description', 'publicationDate', 'tags', '_path'])
  .where({ _path: { $ne: '/posts' } })
  .sort({ publicationDate: 1 })
  .limit(5)
  .find()
</script>

<style lang="scss">
.last-posts {
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