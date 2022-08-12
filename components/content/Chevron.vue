<template>
  <span
    v-once
    :class="`chevron--${direction.toLowerCase()}`"
    :style="{ width: size, height: size }"
    class="chevron"
  ></span>
</template>

<script setup lang="ts">
const props = defineProps({
  direction: {
    type: String,
    default: 'Right'
  },
  size: {
    type: String,
    default: '0.5em'
  }
})
</script>

<style scoped lang="scss">
.chevron {
  display: inline-block;
  border-top: solid 3px;
  border-right: solid 3px;

  &--right {
    transform: rotateZ(45deg);
  }

  &--up {
    transform: rotateZ(-45deg);
  }

  &--left {
    transform: rotateZ(-135deg);
  }

  &--down {
    transform: rotateZ(135deg);
  }
}
</style>