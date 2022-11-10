<script setup>
const { gap, center } = defineProps({
  gap: Number,
  center: Boolean
})

const style = computed(() => {
  const style = {}

  if (gap) {
    style.gap = `${8 * gap}px`
  }

  if (center) {
    style.justifyContent = 'center'
  }

  return style
})
</script>

<template>
  <div
    class="horizontal-grid"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-grid {
  display: flex;
}
</style>
