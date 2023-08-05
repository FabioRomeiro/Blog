<script setup>
defineProps({
  small: {
    type: Boolean,
    defauly: false
  }
})
</script>

<template>
  <section v-once class="credentials">
    <NuxtLink to="/" class="credentials__title">
      <span class="credentials__name">
        Fábio Romeiro
      </span>

      <span
        v-if="!small"
        class="credentials__position"
      >
        Desenvolvedor Front-end
      </span>
    </NuxtLink>
  </section>
</template>

<style lang="scss">
.credentials {
  &__title {
    display: flex;
    flex-direction: column;
    font-family: Poppins, var(--font-family);
  }
  
  &__name {
    font-size: 1.3em;
    font-weight: 600;
    position: relative;
    color: var(--highlight-color);
  }
  
  &__position {
    margin-top: 8px;
    font-size: 0.9em;
    font-weight: 300;
    color: var(--contrast-color);
  }
}
</style>