<template>
  <NuxtLink
    v-once
    class="tag"
    :class="`tag--${tagSlug}`"
  >
    {{ tag }}
  </NuxtLink>
</template>

<script setup lang="ts">
const { tag } = defineProps({
  tag: String
})

const { $slugify } = useNuxtApp()
const tagSlug = $slugify(tag)
</script>

<style lang="scss" scoped>
.tag {
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 30px;
  background-color: var(--contrast-color);
  color: var(--primary-color);
  white-space: nowrap;
  display: inline-block;

  &--front-end {
    background-color: #ffd300;
    color: #2e2e2e;
  }

  &--nuxt {
    background-color: #5bb984;
    color: #2e2e2e;
  }

  &--vue {
    background-color: #34495e;
    color: #fbfbfb;
  }
}
</style>