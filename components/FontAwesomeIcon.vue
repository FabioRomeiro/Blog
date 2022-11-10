<template>
  <svg>
    <use :xlink:href="href" />
  </svg>
</template>

<script setup>
const props = defineProps({
  icon: String
})
const href = `icons.svg#${props.icon}`
</script>
