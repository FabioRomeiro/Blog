<template>
  <span
    v-once
    :class="`chevron--${direction}`"
    :style="{ width: size, height: size }"
    class="chevron"
  ></span>
</template>

<script setup>
const props = defineProps({
  right: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  up: {
    type: Boolean,
    default: false
  },
  down: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: '0.5em'
  }
})

const direction = computed(() => {
  return [
    { name: 'right', selected: props.right },
    { name: 'left', selected: props.left },
    { name: 'up', selected: props.up },
    { name: 'down', selected: props.down },
  ].find(({ selected }) => selected)?.name || 'right'
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