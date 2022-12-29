---
title: 5 maneiras de centralizar uma div
description: “Como centralizar uma div?” é com certeza uma das coisas mais pesquisadas por quem mexe com desenvolvimento web, principalmente pela galera do back-end. Neste artigo vou mostrar 5 maneiras de alcançar este objetivo.
publicationDate: 28/12/2022
tags:
  - Front-end
  - HTML
  - CSS
---

## 1) Position: fixed / absolute

Vamos começar pelo jeito ruim, que deve ser utilizado em apenas casos bem específicos mas que não deixa de ser uma maneira de centralizar uma div.

Como as duas formas são bem parecidas, resolvi coloca-las juntas.

::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
      .container div {
        background-color: red;
      }

      .container div {
        --size: 100px;

        position: fixed;
        width: var(--size);
        height: var(--size);
        left: calc(50% - (var(--size) / 2));
        top: calc(50% - (var(--size) / 2));
      }
    </style>
    ```
  ::
::

Para ficar claro o que o valor `100px` significa o coloquei na variável `—size`, que significa “tamanho”, e como a div é um quadrado, a largura e a altura possuem o mesmo valor.

Você poderia enxugar ainda mais colocando o `calc` dentro de uma variável chamada `—center`, e utiliza-la no `left` e no `top`.

Para fazer utilizando absolute, é só substituir o valor de `position` de `fixed` para `absolute`, tudo irá funcionar da mesma maneira.

::FileSnippet{fileName=index.html}
  ::CodeSnippet{toggleable}
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
      .container div {
        background-color: red;
      }

      .container div {
        --size: 100px;
    ```
  ::
  ::CodeSnippet
    ```css
        position: absolute;
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
        width: var(--size);
        height: var(--size);
        left: calc(50% - (var(--size) / 2));
        top: calc(50% - (var(--size) / 2));
      }
    </style>
    ```
  ::
::


## 2) Transform: translate

Essa é uma variação da forma de cima onde não é preciso fazer aqueles calcs malucos.

::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
      .container div {
        --size: 100px;

        position: absolute;
        width: var(--size);
        height: var(--size);
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);

        background-color: red;
      }
    </style>
    ```
  ::
::

Utilizando o transform translate é possível obter o mesmo resultado.

No código acima a div que será centralizada é deslocada 50% do topo e da esquerda. Ao aplicar apenas essa alteração é possivel notar que a div não está completamente centralizada uma vez que o tamanho dela não foi considerado.

Para resolver este problema é adicionado o translate que desloca 50% da largura do objeto para a esquerda (por isso o valor é negativo, se fosse positivo iria para a direita) e 50% da altura do objeto para cima.

## 3) Display: table

Como o próprio valor da propriedade diz, desta maneira conseguimos estilizar os elementos HTML como se fossem celulas de uma tabela.

::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <main class="container">
      <div class="wrapper">
        <div></div>
      </div>
    </main>

    <style>
      .container {
        display: table;
        width: 100%;
        height: 100vh
      }

      .wrapper {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
      }

      .wrapper div {
        --size: 100px;

        display: inline-block;
        width: var(--size);
        height: var(--size);

        background-color: red;
      }
    </style>
    ```
  ::
::

Utilizando o display table precisamos criar um wrapper dentro do container para garantir a centralização vertical da nossa div.

No `.container` definimos a estilização como tabela e o seu tamanho, no `.wrapper` definimos que ele será estilizado como uma celula de uma tabela e que esta celula terá seu conteúdo alinhado ao centro e se localizará verticalmente ao meio.

No estilo da div em si é definido seu tamanho e que ela não será exibida como um bloco, mas sim um `inline-block`, que, explicando bem por cima, significa que terá seu espaçamento tratado como o de um texto (para uma explicação decente sobre `inline-block` [leia este artigo](https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-block-4e6cba2f19d4)).

## 4) Flexbox

Agora começam as soluções que os deixam os devs front felizes.

::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
      .container {
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .container div {
        --size: 100px;

        width: var(--size);
        height: var(--size);
        background-color: red;
      }
    </style>
    ```
  ::
::

Utilizando flex não é necessário fazer nenhuma configuração de estilo na div que será centralizada, além é claro da sua base como tamanho e cor, todo o posicionamento é definido no elemento pai, no caso, .container.

No .container é definido seu tamanho, e com apenas 3 propriedades é definido que será exibido como flex, alinhado horizontalmente ao centro e verticalmente ao centro.

Uma alternativa utilizando flex e que fica mais enxuta é utilizando `margin: auto` na div que será centralizada:


::FileSnippet{fileName=index.html}
  ::CodeSnippet{toggleable}
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
    ```
  ::
  ::CodeSnippet
    ```css
      .container {
        width: 100vw;
        height: 100vh;

        display: flex;
      }

      .container div {
        --size: 100px;

        width: var(--size);
        height: var(--size);
        background-color: red;

        margin: auto;
      }
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </style>
    ```
  ::
::

## 5) Grid layout

A solução com Grid layout é bem parecida


::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <main class="container">
      <div></div>
    </main>

    <style>
      .container {
        width: 100vw;
        height: 100vh;

        display: grid;
        align-content: center;
        justify-content: center;
      }

      .container div {
        --size: 100px;

        width: var(--size);
        height: var(--size);
        background-color: red;
      }
    </style>
    ```
  ::
::

Assim como no flex o posicionamento é todo definido no elemento pai.

O que mudou do flex para o grid, além da propriedade de display receber o valor `grid`, é a propriedade `align-content` que fica responsável pelo alinhamento vertical.

## Conclusão

Com certeza existem outras maneiras extraordinárias de se centralizar uma div, e com o evoluir da tecnologia outras maneiras surgirão, o segredo é continuar se atualizando e buscando melhores soluções para problemas antigos.
