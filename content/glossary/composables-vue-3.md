---
title: O que são Composables em Vue 3?
subject: Composables em Vue 3
isPluralSubject: true
description: Clique para saber mais sobre Composables em Vue 3, aproveite também para explorar mais conteúdos sobre Front-end, Javascript e HTML.
publicationDate: 29/12/2022
tags:
  - Front-end
  - Javascript
  - HTML
---

Um *composable* é uma função que pode ser usada com a Composition API do Vue 3 e permite a reutilização de lógicas que armazenam informações de estado da aplicação (lógicas *stateful*).

<!-- TODO: Future link
::Callout
Para saber o que é Composition API leia [O que é Composition API em Vue 3?](/glossary/composition-api-vue-3)
::
-->

## Quando usar Composables em Vue 3?

Sempre que precisar reutilizar uma lógica que necessita de uma informação de estado da aplicação armazenado é uma boa ideia usar composables.

Um exemplo de lógica que armazena informações de estado da aplicação é um sistema de modo escuro de um site, a informação de que o site está com o modo escuro ativo ou não é algo que deve ser armazenado pela aplicação, com isso podemos criar um composable responsável por informar se o modo está ativo ou não.

Em casos de reutilização de lógicas que não precisam da informação de estado, ou seja, lógicas *stateless*, por exemplo a formatação de uma data, não é necessário a criação de uma composable.

## Como criar um Composable em Vue 3?

*Composables* são funções javascript que ficam dentro do diretório `composables` na raiz do projeto e começam com o prefixo `use`, por exemplo:

::FileSnippet{fileName=composables/darkMode.js}
  ::CodeSnippet
    ```js
    export function useDarkMode () {
      // ...
    }
    ```
  ::
::
