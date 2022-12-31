---
title: O que é Prop Drilling?
subject: Prop Drilling
isPluralSubject: false
description: Clique para saber mais sobre Prop Drilling, aproveite também para explorar mais conteúdos sobre Front-end, Javascript e Vue.
publicationDate: 31/12/2022
tags:
  - Front-end
  - Javascript
  - Vue
---

Quando um projeto front-end escala, múltiplos componentes surgem, e muitas vezes esses componentes utilizam outros componentes que por sua vez podem também utilizar muitos outros componentes.

Suponha que o componente A possui uma informação que precisa ser utilizada no componente D. Para esta informação sair do A e chegar no D é normal criarmos props, que são parâmetros dos componentes, nos componentes B, C e D. Este processo de criar uma prop para cada componente no caminho para mover a informação é conhecido como _Prop Drilling_.

![Prop Drilling](/images/glossary/prop-drilling/PropDrilling.svg)

_Drilling_ significa "Perfuração" em inglês, este nome vem da necessidade de “perfurar” os componentes com props para passar a informação.

## Qual o problema de Prop Drilling?

É sempre ideal manter seu projeto escalável com uma boa arquitetura para que a complexidade de resolução dos problemas sejam limitadas a dificuldade das soluções e não de suas implementações. Ou seja, implementar uma solução não deve ser a principal dificuldade do desenvolvedor. 

Quando Prop Drilling acontece é quando surge a parte do código que todos os desenvolvedores do time desanimam só de pensar em tocar, pois significa duas coisas principais:
- Para descobrir de onde vem uma informação é necessário percorrer toda a árvore de componentes de baixo para cima.
- Para colocar uma nova informação será necessário adicionar uma nova prop em cada um dos componentes da árvore até chegar onde a informação será utilizada.

## Como resolver Prop Drilling?

Existem duas principais maneiras de contornar este problema, uma não muito boa e uma muito boa.

### Provide / Inject

A primeira solução, é utilizando provide/inject, o componente A provê (provide) a informação necessária no componente D para todos os seus descendentes, dessa maneira qualquer componente abaixo de A na árvore de componentes poderá injetar (inject) a informacao em seu componente e utilizá-la sem precisar movê-la de um lado para o outro.

![Provide / Inject](/images/glossary/prop-drilling/ProvideInject.svg)

Isso pode ser feito facilmente em Vue, por exemplo, utilizando esta sintaxe:

::FileSnippet{fileName=A.vue}
  ::CodeSnippet
    ```html
    <script setup>
    import { provide } from 'vue'
    
    provide('information', 'This is from component A')
    </script>
    ```
  ::
::

::FileSnippet{fileName=D.vue}
  ::CodeSnippet
    ```html
    <script setup>
    import { inject } from 'vue'
    
    const information = inject('information')
    </script>
    ```
  ::
::

Está solução não é a ideal pois, assim como o Prop Drilling, para descobrir de onde uma informação do componente D vem é necessário subir a árvore de componentes de cima para baixo procurando.

E o trabalho é ainda mais misterioso do que com as props pois nem todos os componentes da árvore utilizarão a informação, então a origem dela não fica clara.

### State Manager

Esta solucao é a ideal para muitos casos. Se está informação ficar em um servico separado da árvore de componentes, sempre quando algum deles precisar acessá-la saberá exatamente onde procurar, evitando o mistério da origem da informação e deixará escalável a consulta e adição de novas informações compartilhadas pelos componentes já que elas estão concentradas em um mesmo lugar.

![State Manager](/images/glossary/prop-drilling/StateManager.svg)

<!--
::Callout
Para saber mais sobre State managers e tecnologias para controle de estados leia [O que são Vuex, Pinia e State Managers?](/glossary/vuex-pinia-state-managers)
::
-->
