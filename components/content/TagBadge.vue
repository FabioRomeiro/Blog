<template>
  <NuxtLink
    v-once
    class="tag"
    :class="`tag--${tagSlug}`"
  >
    #<span class="tag__text">{{ tag }}</span>
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
  &__text {
    color: var(--contrast-color);
    opacity: .7;
  }
}
</style>