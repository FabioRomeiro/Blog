<template>
  <div v-once class="post">
    <div class="post__title">
      <h3>
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <span class="post__date">
        {{ post.publicationDate }}
      </span>
    </div>

    <p>{{ post.description }}</p>

    <TagsList
      class="post__tags"
      :tags="post.tags"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: Object
})
</script>

<style lang="scss">
.post {
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px var(--contrast-color-light);

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (min-width: 850px) {
      align-items: center;
    }

    @media (max-width: 849px) {
      gap: 8px;
      flex-direction: column;
    }

    h3 {
      margin: 0;

      a {
        color: var(--highlight-color);
      }
    }
  }

  &__date {
    font-size: 1em;
    opacity: .7;
  }

  &__tags {
    align-self: flex-end;
  }
}
</style>
