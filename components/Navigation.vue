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
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </ContentNavigation>
</template>

<style>
.navigation__list {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
}

.navigation__link {
  text-decoration: none;
  display: block;
  padding: 8px;
  color: #2e2e2e;
}
.navigation__link:not(.navigation__link--active):hover {
  background-color: #f3f3f3;
}
.navigation__link--active {
  background-color: #2e2e2e;
  color: white;
}
</style>