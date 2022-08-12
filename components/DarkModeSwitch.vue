<template>
  <div class="dark-mode-switch">
    <input
      id="dark-mode-switch"
      class="dark-mode-switch__input"
      type="checkbox"
      v-model="isLightMode"
      @change="switchColorMode"
    />
    <label
      class="dark-mode-switch__switch"
      for="dark-mode-switch"
    ></label>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const isLightMode = colorMode.preference === 'light'
const switchColorMode = event => {
  colorMode.preference = event.target.checked ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>
.dark-mode-switch {
  $slider-size: 30px;
  $slider-spacing: 2px;
  $transition-duration: .2s;

  position: relative;

  &__switch {
    display: inline-block;
    width: 60px;
    height: 34px;
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
  }

  &__input:checked + &__switch::after {
    left: calc(100% - #{$slider-size} - #{$slider-spacing});
    background-color: var(--primary-color);
  }

  &__input:checked + &__switch {
    background-color: var(--highlight-color);
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
