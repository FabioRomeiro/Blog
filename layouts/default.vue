<template>
  <div class="layout-default">
    <aside class="layout-default__header">
      <Credentials />
      <Navigation />
    </aside>
    <section class="layout-default__content">
      <slot></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style>
.layout-default__header {
  position: fixed;
  width: 300px;
  padding: 24px 16px;
  box-sizing: border-box;
  border-right: 1px #d9d9d9 solid;
  box-shadow: 4px 0px 11px 4px rgba(0, 0, 0, 13%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.layout-default__content {
  padding: 24px 0 0 300px;
  margin: 0 auto;
  width: 60%;
  max-width: 1000px;
}
</style>