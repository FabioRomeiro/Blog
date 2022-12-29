---
title: O que é Virtual DOM?
subject: Virtual DOM
isPluralSubject: false
description: Clique para saber mais sobre Virtual DOM, aproveite também para explorar mais conteúdos sobre Front-end, Javascript e HTML.
publicationDate: 28/12/2022
tags:
  - Front-end
  - Javascript
  - HTML
---

O Virtual DOM é uma representação do DOM com objetos javascript. Ele não é uma tecnologia específica, mas sim um conceito, ou seja, você pode criar seu próprio padrão de estrutura do Virtual DOM baseado no que é mais relevante para o seu negócio.

Uma maneira de visualizar o DOM e o Virtual DOM é imaginando que o DOM é um prédio, o Virtual DOM é a planta, ou seja, uma maneira de explorar, entender e planejar a estrutura do prédio sem ter a necessidade de acessar o prédio em si.

::Callout
Para entender mais sobre o DOM e como acessa-lo leia [O que é DOM?](/glossary/dom)
::

## Qual a vantagem do Virtual DOM?

Alterar o DOM através do javascript é um processo que pode ser custoso quando escalado a grandes interfaces dinâmicas, principalmente quando este processo é feito milhares de vezes em questões de segundos.

Em contrapartida, alterar o Virtual DOM é um custo muito baixo pois ele é apenas um objeto javascript que pode ser percorrido e alterado com todo o poder desta linguagem de programação. Com as alterações feitas no Virtual DOM, elas são sincronizadas de uma vez no DOM, resumindo os possíveis milhares de acessos ao DOM a apenas um, neste cenário.

Os frameworks javascript mais modernos como Vue e React utilizam o Virtual DOM.

## Como funciona o Virtual DOM no Vue 3?

Toda alteração que acontece em objetos javascript reativos em Vue 3 necessida da utilização do Virtual DOM para atualizar a interface do usuário de maneira dinâmica.

Um dos 3 core modules do Vue, o Renderer, possui 3 fases de execução, sendo a última, conhecida como Patch, responsável pela atualização da interface do usuário quando um gatilho (*trigger*) do sistema de reatividade é executado.

<!-- TODO: Future link
::Callout
Para saber mais sobre quais são os core modules do Vue e como eles trabalham juntos, leia a [explicação dos 3 core modules do Vue 3](/articles/core-modules-vue-3).
::
-->

Nesta fase é comparado o Virtual DOM antigo e o novo para analisar o que foi alterado. Com as diferenças das estruturas de Virtual DOM em mãos, as alterações específicas são processadas e atualizadas no DOM.

## Como criar um Virtual DOM?

Como Virtual DOM é um conceito, é possível estrutura-lo de qualquer maneira, por exemplo, imagine que a estrutura escolhida é algo deste tipo:

::FileSnippet{fileName=main.js}
  ::CodeSnippet
    ```js
    const vdom = {
      tag: 'div',
      children: [
        {
          tag: 'h1',
          children: ['Meu site']
        }
      ]
    }
    ```
  ::
::

Esta é uma estrutura válida, todos os elementos possuem qual tag representa e quais são seus nós filhos.

Agora vamos criar uma pequena função que converte este Virtual DOM para um nó do DOM.

::FileSnippet{fileName=main.js}
  ::CodeSnippet{toggleable}
    ```js
    const vdom = {
      tag: 'div',
      children: [
        {
          tag: 'h1',
          children: ['Meu site']
        }
      ]
    }
    ```
  ::
  ::CodeSnippet
    ```js
    function render (vnode) {
      if (typeof vnode === 'string') {
        return vnode	
      }

      const element = document.createElement(vnode.tag)
      const childrenElements = vnode.children?.map(n => render(n))
      element.append(...childrenElements)
      return element
    }
    ```
  ::
::

Com isso, se rodarmos o vdom criado anteriormente com a nova função render, teremos como retorno um elemento simples do DOM que pode ser adicionado na página.


::FileSnippet{fileName=main.js}
  ::CodeSnippet{toggleable}
    ```js
    const vdom = {
      tag: 'div',
      children: [
        {
          tag: 'h1',
          children: ['Meu site']
        }
      ]
    }

    function render (vnode) {
      if (typeof vnode === 'string') {
        return vnode	
      }

      const element = document.createElement(vnode.tag)
      const childrenElements = vnode.children?.map(n => render(n))
      element.append(...childrenElements)
      return element
    }
    ```
  ::
  ::CodeSnippet
    ```js
    render(vdom)
    ```
  ::
::
