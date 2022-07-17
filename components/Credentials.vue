<template>
  <section v-once class="credentials">
    <p class="credentials__title">
      <span class="credentials__name">
        Fábio Romeiro
      </span>
      <span class="credentials__position">
        Desenvolvedor Front-end
      </span>
    </p>
  </section>
</template>

<style lang="scss">
.credentials {
  &__title {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    font-family: Poppins, var(--font-family);
  }
  
  &__name {
    font-size: 1.7em;
    font-weight: 600;
    position: relative;
    color: var(--highlight-color);
  
    &::before {
      content: '';
      width: 0; 
      height: 0; 
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid var(--contrast-color);
      position: absolute;
      top: calc(50% - 6px);
      left: -24px;
    }
  }
  
  &__position {
    margin-top: 8px;
    font-size: 1.2em;
    font-weight: 300;
  }
  
  &__summary {
    margin-top: 16px;
    line-height: 1.4em;
  }
}
</style>