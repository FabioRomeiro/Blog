<script setup>
const { fileName } = defineProps({
  fileName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="file-snippet">
    <span class="file-snippet__name">{{ fileName }}</span>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.file-snippet {
  $code-bg-color: #353535;
  $code-contrast-color: #cccccc;

  display: flex;
  flex-direction: column;
  
  &__name {
    background-color: $code-bg-color;
    color: $code-contrast-color;
    font-size: 14px;
    padding: 8px;
    border-radius: 3px 3px 0 0;
    text-align: end;
  }
}
</style>
