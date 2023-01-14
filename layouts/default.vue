<template>
  <div class="layout-default">
    <section class="layout-default__content">
      <div
        id="reading-progress-bar"
        class="layout-default__progress-bar"
      ></div>
      <slot></slot>
    </section>
    <aside class="layout-default__menu">
      <Credentials class="layout-default__credentials" />
      <Navigation class="layout-default__navigation" />
      <DarkModeSwitch class="layout-default__switch" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  $menu-width-desktop: 300px;

  &__progress-bar {
    position: fixed;
    left: $menu-width-desktop;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    
    @media (min-width: 850px) {
      width: calc(100% - #{$menu-width-desktop});
    }
  }

  &__menu {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    box-shadow: 4px 0px 11px 4px rgba(0, 0, 0, 23%);
    transition: background-color .2s ease-in-out;

    @media (min-width: 850px) {
      top: 0;
      width: $menu-width-desktop;
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