<template>
  <ul
    class="contact"
    v-once
  >
    <li>
      <NuxtLink
        to="mailto:hi@fabioromeiro.dev"
        external
        title="E-mail"
      >
        <FontAwesomeIcon icon="envelope" />
        hi@fabioromeiro.dev
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://www.linkedin.com/in/fabioromeiro"
        external
        target="_blank"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon="linkedin" />
        Fábio Romeiro
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://github.com/FabioRomeiro"
        external
        target="_blank"
        title="Github"
      >
        <FontAwesomeIcon icon="github" />
        FabioRomeiro
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://www.instagram.com/fabioromeiroo"
        external
        target="_blank"
        title="Instagram"
      >
        <FontAwesomeIcon icon="instagram" />
        @fabioromeiroo
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.contact {
  line-height: 30px;

  @media (min-width: 850px) {
    columns: 2;
  }

  svg {
    margin-right: 8px;
  }
}
</style>
