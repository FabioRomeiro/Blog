<template>
  <div class="dark-mode-switch">
    <input
      id="dark-mode-switch"
      class="dark-mode-switch__input"
      type="checkbox"
      v-model="isLightMode"
    />
    <label
      class="dark-mode-switch__switch"
      for="dark-mode-switch"
    >
      <FontAwesomeIcon
        icon="moon"
        class="icon"
      />
      <FontAwesomeIcon
        icon="sun"
        class="icon"
      />
    </label>
  </div>
</template>

<script>
export default {
  computed: {
    isLightMode: {
      get () {
        return this.$colorMode.preference === 'light'
      },
      set (value) {
        this.$colorMode.preference = value ? 'light' : 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-mode-switch {
  $slider-size: 28px;
  $slider-spacing: 2px;
  $transition-duration: .2s;

  position: relative;

  &__switch {
    display: inline-block;
    width: 60px;
    height: 32px;
    position: relative;
    cursor: pointer;
    background-color: var(--primary-color);
    border-radius: 34px;
    border: solid 1px var(--highlight-color);
    transition: background-color $transition-duration ease-in-out;

    &::after {
      content: '';
      position: absolute;
      width: $slider-size;
      height: $slider-size;
      border-radius: 50%;
      top: $slider-spacing;
      transition: left $transition-duration ease-in-out, background-color $transition-duration ease-in-out;
    }

    .icon {
      $icon-size: 16px;

      position: absolute;
      font-size: $icon-size;
      top: calc(50% - #{$icon-size} / 2);
      transition: color .2s ease-in-out;
      z-index: 1;

      &:first-child {
        color: var(--primary-color);
        left: 9px;
      }

      &:last-child {
        color: var(--highlight-color);
        right: 9px;
      }
    }
  }

  &__input:checked + &__switch {
    background-color: var(--highlight-color);

    &::after {
      left: calc(100% - #{$slider-size} - #{$slider-spacing});
      background-color: var(--primary-color);
    }
  }

  :not(&__input:checked) + &__switch::after {
    left: $slider-spacing;
    background-color: var(--highlight-color);
  }

  &__input {
    opacity: 0;
    position: absolute;
  }
}

</style>
