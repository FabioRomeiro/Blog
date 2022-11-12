<template>
  <header
    v-once
    class="introduction"
  >
    <img
      src="~/assets/images/FabioRomeiro2.jpg"
      alt="Foto do desenvolvedor Fábio Romeiro"
      width="150"
      height="150"
    >
    <div class="introduction__about">
      <h1 class="introduction__title">
        Fábio Romeiro
        <small>Desenvolvedor Front-end</small>
      </h1>
      <ul class="introduction__competences">
        <li>Vue</li>
        <li>Nuxt</li>
        <li>JS</li>
        <li>CSS</li>
        <li>Algorítmos</li>
      </ul>
      <Contact />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.introduction {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100px;
    border: solid 3px var(--highlight-color);
    box-shadow: 0 0 14px rgb(12, 12, 12, .4);
  }

  &__info {
    display: flex;
  }

  &__about {
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    @media (max-width: 850px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
  
  &__title {
    display: inline-flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 0;

    small {
      font-size: .5em;
    }
  }

  &__competences {
    display: flex;
    align-items: center;
    gap: 24px;
    font-style: italic;
    margin: 0;

    li {
      position: relative;
      list-style: none;

      &:not(:last-child)::after {
        $bullet-size: 5px;

        content: '';
        width: $bullet-size;
        height: $bullet-size;
        border-radius: $bullet-size;
        background-color: var(--contrast-color);
        position: absolute;
        right: -16px;
        top: calc(50% - #{$bullet-size}/2);
      }
    }
  }
}
</style>
