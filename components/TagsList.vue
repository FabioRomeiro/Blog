<script setup>
const { tags } = defineProps({
  tags: Array
})
</script>

<template>
  <ul class="tags-list">
    <li
      v-for="tag in tags"
      :key="tag"
    >
      <TagBadge :tag="tag" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tags-list {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: 0;

  li {
    list-style: none;
  }
}
</style>
