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
        class="contact__link"
      >
        <FontAwesomeIcon icon="envelope" />
        <span class="label">hi@fabioromeiro.dev</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://www.linkedin.com/in/fabioromeiro"
        external
        target="_blank"
        title="LinkedIn"
        class="contact__link"
      >
        <FontAwesomeIcon icon="linkedin" />
        <span class="label">Fábio Romeiro</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://github.com/FabioRomeiro"
        external
        target="_blank"
        title="Github"
        class="contact__link"
      >
        <FontAwesomeIcon icon="github" />
        <span class="label">FabioRomeiro</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="https://www.instagram.com/fabioromeiroo"
        external
        target="_blank"
        title="Instagram"
        class="contact__link"
      >
        <FontAwesomeIcon icon="instagram" />
        <span class="label">@fabioromeiroo</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.contact {
  line-height: 30px;
  
  @media (min-width: 931px) {
    font-size: .9em;
    columns: 2;
  }

  @media (max-width: 930px) {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1.3em;
  }

  &__link {
    .label {
      margin-left: 8px;

      @media (max-width: 930px) {
        display: none;
      }
    }
  }
}
</style>
