---
title: Como criar um Composable com Vue 3?
description: Composables são um dos destaques do Vue 3, então neste artigo vamos resolver um problema real através do desenvolvimento de um composable.
publicationDate: 29/12/2022
tags:
  - Front-end
  - Vue
---

## O problema

É boa prática de acessibilidade que todo campo de formulário possua uma label relacionada a ele por um id.

::Callout{type=warning}
Aninhar o input à label (label implícita) é uma má prática que pode confundir alguns leitores de tela. Fonte: [W3C - H44](https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/H44.html)
::

Porém **não quero ter que pensar em um id toda vez que adicionar um campo novo, muito menos correr o risco de este id já estar sendo utilizado em algum outro lugar da página**.

Considere que temos um componente de input de texto customizado chamado CustomInput:
::FileSnippet{fileName=CustomInput.vue}
  ::CodeSnippet
    ```html
    <script setup>
    const { label } = defineProps({
      label: {
        type: String,
        required: true
      }
    })
    </script>

    <template>
      <div>
        <label>{{ label }}</label>
        <input type="text">
      </div>
    </template>
    ```
  ::
::

(Para focar apenas no propósito do artigo estou exibindo apenas o necessário para o entendimento do problema e a solução com o composable)

## Criando o Composable

Dentro do nosso CustomInput precisamos gerar um id único na página para ser utilizado entre a label e o input, podemos fazer isso criando um composable chamado `uniqueId`.

Um composable é uma função javascript, e por convenção possui o prefixo `use`. Então para criar a composable de `uniqueId`, dentro do diretório `composables/` vamos criar o arquivo `uniqueId.ts` que exportará a seguinte função

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet
    ```ts
    export function useUniqueId () {
    }
    ```
  ::
::

Com isso o nosso composable já pode ser acessado e executado, porém ele não fará nada.

A primeira coisa que precisamos fazer é gerar um numero aleatório, podemos fazer isso utilizando `Math.random()`. Como eu não espero que será adicionado mais do que 2000 campos ao mesmo tempo em uma tela, vou definir esse como o número máximo a ser randomizado.

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet
    ```ts
    export function useUniqueId () {
      const number = Math.floor(Math.random() * 2000)
    }
    ```
  ::
::

Este número será meu id, porém, tem a chance de o número aleatório já estar sendo utilizado como id de outro campo, para evitar que isso aconteça, precisamos verificar na página se existe algum elemento com este numero como ID.

Este composable será execitado durante a etapa de setup do Lifecycle, por isso precisamos garantir de que a lógica para buscar elementos por ID seja executada quando o componente foi montado.

<!-- TODO: Future link
::Callout
Para saber mais sobre os Lifecycle Hooks do Vue leia [O que são Lifecycle Hooks em Vue 3?](https://www.notion.so/O-que-s-o-Lifecycle-Hooks-em-Vue-3-e9ce07bd16a7489eae68aef2fc42ca44)
::
-->

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet
    ```ts
    import { onMounted } from 'vue'

    export function useUniqueId () {
      const number = Math.floor(Math.random() * 2000)

      onMounted(() => {
        const element = document.getElementById(number)
      })
    }
    ```
  ::
::

Se existir um elemento, precisamos gerar outro número e verificar novamente, este processo será executado até que seja gerado um número que não está sendo utilizado. Podemos fazer isso recursivamente.

Para não chamarmos o composable recursivamente, vamos isolar a lógica de geração do id em uma função própria

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet
    ```ts
    import { onMounted } from 'vue'

    export function useUniqueId () {
      onMounted(() => {
        const id = generateUniqueId()
      })
    }

    function generateUniqueId () {
      const number = Math.floor(Math.random() * 2000)
      const element = document.getElementById(number)
      if (element) {
        return generateUniqueId()
      }
      return number
    }
    ```
  ::
::

O id unico esta sendo gerado mas precisamos retorna-lo no composable, vamos fazer isso criando um objeto reativo e retornando esse objeto com o valor do id.

Como o id não poderá ser alterado, vamos fazer com que o objeto seja apenas de leitura.

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet
    ```ts
    import { ref, onMounted, readonly } from 'vue'

    export function useUniqueId () {
      const id = ref(null)

      onMounted(() => {
        id.value = generateUniqueId()
      })

      return readonly(id)
    }

    function generateUniqueId () {
      const number = Math.floor(Math.random() * 2000)
      const element = document.getElementById(number)
      if (element) {
        return generateUniqueId()
      }
      return number
    }
    ```
  ::
::

Com isso nosso composable está pronto para uso mas possui algumas melhorias que podem ser feitas, porém para ver funcionando, vamos adiciona-lo no CustomInput.

::FileSnippet{fileName=CustomInput.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    import { useUniqueId } from '~/composables/uniqueId'
    ```
  ::
  ::CodeSnippet{toggleable}
    ```js
    const { label } = defineProps({
      label: {
        type: String,
        required: true
      }
    })
    ```
  ::
  ::CodeSnippet
    ```js
    const id = useUniqueId()
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    <template>
      <div>
    ```
  ::
  ::CodeSnippet
    ```html
        <label :for="id">{{ label }}</label>
        <input :id="id" type="text">
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
      </div>
    </template>
    ```
  ::
::

## Otimizando o composable

O nosso composable funciona mas pode ficar mais otimizado, e podemos fazer isso reduzindo a quantidade de vezes que consultamos o DOM.

Hoje isso toda vez que geramos um número aleatório nós procuramos no DOM inteiro se existe algum elemento com aquele id, podemos salvar os ids já utilizados em uma lista e consultar essa lista ao inves de consultar diretamente o DOM, e caso não exista dentro da lista, ai sim consultamos o DOM.

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { ref, onMounted, readonly } from 'vue'
    ```
  ::
  ::CodeSnippet
    ```ts
    const USED_IDS = []
    ```
  ::
  ::CodeSnippet{toggleable}
    ```ts
    export function useUniqueId () {
      const id = ref(null)

      onMounted(() => {
        id.value = generateUniqueId()
      })

      return readonly(id)
    }
     ```
  ::
  ::CodeSnippet
    ```ts
    function generateUniqueId () {
      const number = Math.floor(Math.random() * 2000)
      const hasElement = USED_IDS.includes(number) || !!document.getElementById(number)
      
      USED_IDS.push(number)
      
      if (hasElement) {
        return generateUniqueId()
      }
      return number
    }
    ```
  ::
::

Dessa maneira minizamos o acesso ao document apenas quando o numero gerado não for um id da lista de ids utilizados

Por fim, se quisermos garantir que a lista de ids já utilizados não vai conter ids repetidos, podemos fazer dela um Set.

::FileSnippet{fileName=composables/uniqueId.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { ref, onMounted, readonly } from 'vue'
    ```
  ::
  ::CodeSnippet
    ```ts
    const USED_IDS = new Set()
    ```
  ::
  ::CodeSnippet{toggleable}
    ```ts
    export function useUniqueId () {
      const id = ref(null)

      onMounted(() => {
        id.value = generateUniqueId()
      })

      return readonly(id)
    }
     ```
  ::
  ::CodeSnippet
    ```ts
    function generateUniqueId () {
      const number = Math.floor(Math.random() * 2000)
      const hasElement = USED_IDS.has(number) || !!document.getElementById(number)
      
      USED_IDS.add(number)
      
      if (hasElement) {
        return generateUniqueId()
      }
      return number
    }
    ```
  ::
::

## Conclusão

Os composables são uma boa opção para reutilizar lógicas entre componentes e páginas, então por exemplo, o composable criado neste artigo pode ser utilizado em qualquer lugar que necessitar de um id único.

Muitos problemas podem ser resolvidos com composables, para saber mais sobre o conceito de composables e quando se deve utiliza-los leia [O que são Composables em Vue 3?](/glossary/composables-vue-3)
