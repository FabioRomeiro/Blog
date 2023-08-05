<template>
  <div class="layout-default">
    <header class="layout-default__header layout-default__container">
      <Logo />
      <Navigation class="layout-default__navigation" />
      <DarkModeSwitch class="layout-default__switch" />
    </header>

    <section class="layout-default__content layout-default__container">
      <div
        id="reading-progress-bar"
        class="layout-default__progress-bar"
      ></div>
      <slot></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  $menu-width-desktop: 300px;

  &__progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    
    @media (min-width: 850px) {
      width: calc(100% - #{$menu-width-desktop});
      left: $menu-width-desktop;
    }
  }

  &__content {
    padding-bottom: 64px;
  }

  &__container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 32px 0;
  }

  &__switch {
    margin-left: auto;
  }
}
</style>