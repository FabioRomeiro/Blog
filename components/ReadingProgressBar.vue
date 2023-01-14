<script setup>
const isReady = ref(false)
const progress = ref(0)

const width = computed(() => `${progress.value}%`)

function updateProgressBar () {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement
  const pageHeight = scrollHeight - clientHeight
  progress.value = Math.ceil((scrollTop / pageHeight) * 100)
}

onMounted(() => {
  isReady.value = true
  updateProgressBar()
  document.addEventListener('scroll', updateProgressBar)
})
onBeforeUnmount(() => {
  document.removeEventListener('scroll', updateProgressBar)
})
</script>

<template>
  <Teleport
    v-if="isReady"
    to="#reading-progress-bar"
  >
    <div
      class="reading-progress-bar"
      :style="{ width }"
    >
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.reading-progress-bar {
  height: 5px;
  background-color: var(--highlight-color);
}
</style>
