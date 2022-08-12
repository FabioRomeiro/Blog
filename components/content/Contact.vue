<template>
  <ul class="contact" v-once>
    <li>
      <NuxtLink to="mailto:hi@fabioromeiro.dev" external title="E-mail">
        hi@fabioromeiro.dev
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://www.linkedin.com/in/fabioromeiro" external target="_blank" title="LinkedIn">
        Fábio Romeiro
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://github.com/FabioRomeiro" external target="_blank" title="Github">
        FabioRomeiro
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://www.instagram.com/fabioromeiroo" external target="_blank" title="Instagram">
        @fabioromeiroo
      </NuxtLink>
    </li>
  </ul>
</template>

<style>
.contact {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
