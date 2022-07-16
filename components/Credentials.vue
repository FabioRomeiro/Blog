<template>
  <section class="credentials">
    <component :is="credentialsTag" class="credentials__title">
      <span class="credentials__name">
        Fábio Romeiro
      </span>
      <span class="credentials__position">
        Desenvolvedor Front-end
      </span>
    </component>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const focusOnCredentials = ['/', '/about'].includes(route.path)
const credentialsTag = focusOnCredentials ? 'h1' : 'p'
</script>

<style>
.credentials__title {
  display: flex;
  flex-direction: column;
  padding-left: 24px;
}

.credentials__name {
  font-size: 1.7em;
  font-weight: 600;
  position: relative;
}
.credentials__name::before {
  content: '';
  width: 0; 
  height: 0; 
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #2e2e2e;
  position: absolute;
  top: calc(50% - 6px);
  left: -24px;
}

.credentials__position {
  margin-top: 8px;
  font-size: 1.2em;
}

.credentials__summary {
  margin-top: 16px;
  line-height: 1.4em;
}
</style>