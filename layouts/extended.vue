<template>
  <div class="layout-extended">
    <header class="layout-extended__header layout-extended__container">
      <Logo small />
      <DarkModeSwitch />
    </header>

    <section class="layout-extended__content layout-extended__container">
      <slot></slot>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.layout-extended {

  &__content {
    padding-bottom: 64px;
  }

  &__container {
    margin: 0 auto;
    width: 90%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 32px 0;
  }
}
</style>
