<script setup>
useHead({
  title: 'Desenvolvedor Front-end',
  description: 'Me chamo Fábio Romeiro, trabalho como desenvolvedor focado em SEO. Escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
  link: [
    { rel: 'canonical', href: 'https://fabioromeiro.dev' }
  ]
})
</script>

<template>
  <main class="blog">
    <Introduction />

    <h1>👋 Olá</h1>

    <p>
      Trabalho como desenvolvedor na <a href="https://www.buser.com.br" target="_blank">Buser</a>
      no time de SEO (Search Engine Optimization).
    </p>

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

    <h2>📰 Últimos artigos</h2>

    <Posts :limit="5" />
  </main>
</template>
