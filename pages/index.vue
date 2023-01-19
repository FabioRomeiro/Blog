<script setup>
const head = useMetadata({
  title: 'Desenvolvedor Front-end',
  description: 'Me chamo Fábio Romeiro, trabalho como desenvolvedor web a 5 anos. Escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
  canonical: 'https://fabioromeiro.dev'
})
useHead(head)
</script>

<template>
  <main class="blog">
    <Introduction />

    <section class="blog__content">
      <h2 class="title">Olá</h2>

      <p>
        Muita coisa na vida é complicada e precisa ser simplificada, então para facilitar para quem
        está com problemas, escrevo esses artigos baseados nas experiências que tive.
      </p>
  
      <p>
        Como escrito no <a href="https://peps.python.org/pep-0020/#the-zen-of-python" target="_blank">Zen do Python 🐍</a>:
      </p>
  
      <blockquote>
        Simples é melhor que complexo
      </blockquote>
    </section>

    <section class="blog__section">
      <h2>📰 Últimos artigos</h2>
      <ArticlesList :limit="5" />
    </section>

    <section class="blog__section">
      <h2>📕 Glossário</h2>
      <GlossaryItemsList :limit="20" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.blog {
  $title-animation-duration: .4s;

  &__content {
    .title {
      animation: fade-in ease-out $title-animation-duration, slide-up cubic-bezier(0, 0, 0.09, 0.98) $title-animation-duration;
      margin-left: calc(1em + 16px);
      position: relative;

      &::before {
        content: '👋';
        position: absolute;
        left: calc((1em + 16px) * -1);
        transform-origin: 1em 1em;
      }

      &:hover {
        &::before {
          animation: wave-hand ease-in-out .4s;
        }
      }
    }

    > :not(.title) {
      opacity: 0;
      animation: fade-in ease-in .2s $title-animation-duration forwards;

      @for $child-number from 2 through 5 {
        &:nth-child(#{$child-number}) {
          animation-delay: #{$child-number * 0.1}s;
        }
      }
    }
  }

  &__section {
    opacity: 0;
    animation: fade-in ease-out .4s $title-animation-duration forwards;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes wave-hand {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(15deg);
  }
}
</style>
