<script setup>
const { type } = defineProps({
  type: {
    type: String,
    default: 'tip',
    validator (value) {
      return value in TYPES
    }
  }
})

const typeEmoji = computed(() => EMOJI_MAP[type])
</script>


<script>
const TYPES = {
  tip: 'tip',
  warning: 'warning'
}

const EMOJI_MAP = {
  [TYPES.tip]: '💡',
  [TYPES.warning]: '⚠️'
}

export default {}
</script>

<template>
  <aside class="callout">
    <span class="callout__emoji">{{ typeEmoji }}</span>
    <div>
      <slot></slot>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.callout {
  display: flex;
  gap: 16px;
  background-color: var(--contrast-color-light);
  padding: 8px;
  border-radius: 3px;
  margin-bottom: 16px;

  &__emoji {
    margin-top: 8px;
  }

  &::v-deep(:last-child) {
    margin-bottom: 0;
  }
}
</style>
