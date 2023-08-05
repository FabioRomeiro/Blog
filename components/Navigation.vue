<script setup>
const pages = [
  {
    path: '/',
    title: 'Início'
  },
  {
    path: '/glossary',
    title: 'Glossário'
  }
]
</script>


<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="page of pages"
        :key="page.path"
        class="navigation__item"
      >
        <NuxtLink
          :to="page.path"
          class="navigation__link"
          active-class="navigation__link--active"
        >
          {{ page.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    font-size: 16px;
    align-items: center;
    gap: 8px;
  }
  
  &__link {
    text-decoration: none;
    display: flex;
    padding: 8px;
    color: var(--contrast-color);

    &:hover {
      background-color: var(--secondary-color);
    }

    &--active {
      font-weight: 500;
    }

    @media (max-width: 850px) {
      height: 60px;
      align-items: center;
      padding: 0 16px;
      flex-direction: column;
      justify-content: center;
      max-width: 60px;
    }
  }
}
</style>