<script setup>
const { toggleable } = defineProps({
  toggleable: {
    type: Boolean,
    default: false
  }
})

const isExpanded = ref(false)

function toggleExpansion () {
  isExpanded.value = !isExpanded.value
}

const codeSnippetClasses = computed(() => {
  return {
    'code-snippet--expanded': isExpanded.value,
    'code-snippet--toggleable': toggleable
  }
})
</script>

<template>
  <div
    class="code-snippet"
    :class="codeSnippetClasses"
  >
    <button
      v-if="toggleable"
      class="code-snippet__button"
      @click="toggleExpansion"
    >
      <span class="icon"></span>
    </button>
    <div class="code-snippet__code">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "sass:math";

  .code-snippet {
    $this: &;
    $code-bg-color: #303030;
    $code-contrast-color: #585858;
    $code-contrast-color-light: #cccccc;
    position: relative;
    
    &--toggleable {
      #{$this}__button {
        $button-size: 18px;
        position: absolute;
        left: math.div($button-size, 2) * -1;
        width: $button-size;
        height: $button-size;
        top: calc(50% - #{math.div($button-size, 2)});
        border-radius: 50% 50%;
        border: none;
        cursor: pointer;
        z-index: 1;
        background-color: $code-bg-color;
  
        .icon {
          left: 5px;
          bottom: 8px;
          
          &, &::after {
            position: absolute;
            width: 8px;
            height: 2px;
            background-color: $code-contrast-color-light;
            border-radius: 3px;
          }
          
          &::after {
            content: '';
            left: 0;
            bottom: 0;
            transform: rotate(0deg);
            transition: transform .2s ease-in-out;
          }
        }
      }

      #{$this}__code {
        position: relative;
        
        &::after {
          content: '...';
          position: absolute;
          color: $code-contrast-color-light;
          left: 16px;
          font-size: 32px;
          top: -10px;
          opacity: 0;
        }
        
        &, &::v-deep(pre) {
          opacity: 1;
          background-color: $code-contrast-color;
          filter: grayscale(1);
        }
      }

      &:not(#{$this}--expanded) {
        > #{$this}__code {
          overflow: hidden;
          height: 25px;

          &::v-deep(pre) {
            opacity: 0;
          }

          &::after {
            opacity: 1;
          }
        }

        .icon {
          &::after {
            transform: rotate(90deg);
          }
        }
      }
    }

    &::v-deep(pre) {
      margin-bottom: 0;
      border-radius: 0;
    }
  }
</style>

