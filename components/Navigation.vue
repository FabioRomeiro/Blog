<template>
  <nav class="navigation">
    <ContentNavigation v-slot="{ navigation }">
      <ul class="navigation__list">
        <li
          v-for="link of navigation"
          :key="link._path"
          class="navigation__item"
        >
          <NuxtLink
            :to="link._path"
            class="navigation__link"
            active-class="navigation__link--active"
          >
            <span class="icon">
              {{ link.icon }}
            </span>
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    font-size: 16px;

    @media (max-width: 850px) {
      align-items: center;
    }

    @media (min-width: 849px) {
      padding: 8px 16px;
      flex-direction: column;
    }
  }
  
  &__link {
    text-decoration: none;
    display: flex;
    padding: 8px;
    color: var(--contrast-color);

    &:not(&--active):hover {
      background-color: var(--secondary-color);
    }

    &--active {
      background-color: var(--highlight-color);
      color: var(--primary-color);
      font-weight: 500;
    }

    @media (max-width: 850px) {
      height: 60px;
      align-items: center;
      padding: 0 24px;
    }

    .icon {
      margin-right: 8px;
    }
  }
}
</style>