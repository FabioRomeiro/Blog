<template>
  <div v-once class="post">
    <div class="post__title">
      <h3>
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <span class="post__date">
        {{ formatDate(post.publicationDate) }}
      </span>
    </div>

    <p>{{ post.description }}</p>

    <ul class="post__tags">
      <li
        v-for="tag in post.tags"
        :key="tag"
      >
        <TagBadge :tag="tag" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: Object
})

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const month = (date.getMonth() + 1).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  return `${date.getDate()}/${month}/${date.getFullYear()}`
}
</script>

<style lang="scss">
.post {
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__date {
    font-size: 1em;
    opacity: .7;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
