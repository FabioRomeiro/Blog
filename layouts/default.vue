<template>
  <div class="layout-default">
    <section class="layout-default__content">
      <slot></slot>
    </section>
    <aside class="layout-default__header">
      <Credentials class="layout-default__credentials" />
      <Navigation class="layout-default__navigation" />
      <DarkModeSwitch class="layout-default__switch" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {

  &__header {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    box-shadow: 4px 0px 11px 4px rgba(0, 0, 0, 23%);

    @media (min-width: 850px) {
      top: 0;
      width: 300px;
      padding: 24px 16px;
      box-sizing: border-box;
      height: 100vh;
      flex-direction: column;
      gap: 24px;
    }
  }

  &__credentials {
    @media (max-width: 849px) {
      display: none;
    }
  }

  &__content {
    padding: 32px 0 96px 0;
    margin: 0 auto;
    max-width: 1000px;
    width: 90%;

    @media (min-width: 850px) {
      width: 60%;
      padding: 64px 0;
      padding-left: 300px;
    }
  }

  &__switch {
    align-self: center;

    @media (max-width: 849px) {
      margin-left: 24px;
    }

    @media (min-width: 850px) {
      margin-top: auto;
    }
  }
}
</style>