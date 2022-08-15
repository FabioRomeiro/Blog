<template>
  <ContentNavigation v-slot="{ navigation }">
    <nav class="navigation">
      <ul class="navigation__list">
        <li
          v-for="link of navigation"
          :key="link._path"
        >
          <NuxtLink
            :to="link._path"
            class="navigation__link"
            active-class="navigation__link--active"
          >
            <FontAwesomeIcon
              :icon="link.icon"
              class="icon"
            />
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </ContentNavigation>
</template>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    font-size: 16px;
  }
  
  &__link {
    text-decoration: none;
    display: block;
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

    .icon {
      margin-right: 8px;
    }
  }
}
</style>