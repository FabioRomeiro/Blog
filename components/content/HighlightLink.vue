
<script setup>
const { label, href } = defineProps({
  href: String,
  label: String,
  icon: String
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="highlight-link"
  >
    <FontAwesomeIcon :icon="icon" />
    {{ label }}
  </a>
</template>

<style lang="scss" scoped>
.highlight-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background-color: var(--contrast-color);
  border-radius: 3px;
  color: var(--primary-color);
}
</style>
