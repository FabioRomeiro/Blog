---
title: Como configurar Sass no Nuxt 3?
description: Configurar Sass com Nuxt 3 é tão rápido e simples que vou dar a resposta agora, literalmente apenas rode npm install --save-dev sass, fim. Duvida? Testa ai ou leia este pequeno artigo.
publicationDate: 04/01/2023
cover:
  src: /images/articles/como-configurar-sass-nuxt-3/cover.jpg
  alt: É tão rápido configurar sass no nuxt 3 que vou colocar a resposta aqui mesmo npm install --save-dev sass. Só isso, JURO!
tags:
  - Front-end
  - Nuxt 3
  - Sass
  - CSS
---

## Nenhum esforço, apenas um comando

Apenas criei este artigo porque configurar o Sass é uma das primeiras coisas que sempre faço quando inicio um projeto.

<!-- TODO: Future link
::Callout
Para saber o que é Sass leia [O que são Sass, Less e Pré-processadores CSS?](/glossary/sass-less-pre-processadores)
::
-->

Se você tem um projeto Nuxt 3, você não precisa configurar o Sass, apenas instala-lo com o comando:

```bash
npm install --save-dev sass
```

Pronto! Com isso você pode utilizar esta tecnologia no seu projeto, nas próximas seções vou mostrar algumas maneiras de como utilizar.

## Como importar estilos globais?

Existem estilos que não são específicos de um componente ou uma página, por exemplo um reset css, variaveis globais ou então classes utilitárias.

Para importar estilos globais, no arquivo nuxt.config.ts, dentro do objeto parâmetro do método defineNuxtConfig adicione:

::FileSnippet{fileName=nuxt.config.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { defineNuxtConfig } from 'nuxt'

    export default defineNuxtConfig({
    ```
  ::
  ::CodeSnippet
    ```ts
      css: [
        '@/assets/css/reset.scss',
        '@/assets/css/global.scss',
        // ... qualquer outra referencia para seu arquivo scss
      ]
    ```
  ::
  ::CodeSnippet{toggleable}
    ```ts
    })
    ```
  ::
::

## Como estilizar utilizar sass no estilo dos componentes?

No bloco de estilo adicione o atributo `lang` com o valor `scss`, desta maneira:

::FileSnippet{fileName=component.vue}
  ::CodeSnippet
    ```html
    <style lang="scss">
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    .component {
      .btn {
        color: red;
      }
    }
    </style>
    ```
  ::
::

Com isso será considerado que todo código dentro deste bloco será escrito utilizando sass.

## Conclusão

Sei que é besteira dar a resposta na descrição do artigo, a galera nem vai precisar clicar para ter a resposta, mas para esse caso acho que vale a pena para espalhar a palavra do Nuxt ❤️.

Já que está aqui, aproveita para aumentar o meu tempo de retenção de usuário lendo os outros artigos do blog que achar relevante 😊.