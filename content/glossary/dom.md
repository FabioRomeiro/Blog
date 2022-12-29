---
title: O que é DOM?
subject: DOM
isPluralSubject: false
description: Clique para saber mais sobre DOM, aproveite também para explorar mais conteúdos sobre Front-end, Javascript e HTML.
publicationDate: 28/12/2022
tags:
  - Front-end
  - Javascript
  - HTML
---

DOM (Document Object Model) é a API do navegador que permite ler e alterar a estrutura de conteúdos exibidos em uma página web.

O DOM representa o documento HTML em formato de nós (*nodes*) e objetos, permitindo que possamos acessar esta estrutura programáticamente.

## Como manipular o DOM?

É possível acessar e modificar o DOM através do Javascript de uma página, por exemplo, imagine uma página com a seguinte estrutura HMTL:

::FileSnippet{fileName=index.html}
  ::CodeSnippet
    ```html
    <html>
      <body>
        <h1>Meu site</h1>
        <p>Descrição do meu site</p>
      </body>
    </html>
    ```
  ::
::

Vamos supor que queremos alterar o título desta página, ou seja, o `h1`, para *“Nosso site”*.

Para fazer isso precisamos primeiro pegar achar o `h1` pelo Javascript

::FileSnippet{fileName=index.html}
  ::CodeSnippet{toggleable}
    ```html
    <html>
      <body>
        <h1>Meu site</h1>
        <p>Descrição do meu site</p>

        <script>
    ```
  ::
  ::CodeSnippet
    ```js
          const titleElement = document.querySelector('h1')
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
        </script>
      </body>
    </html>
    ```
  ::
::

Com o elemento `h1` na constante `titleElement`, vamos alterar a propriedade `innerText` do elemento, que é responsável por armazenar o conteúdo textual dentro do elemento.

::FileSnippet{fileName=index.html}
  ::CodeSnippet{toggleable}
    ```html
    <html>
      <body>
        <h1>Meu site</h1>
        <p>Descrição do meu site</p>

        <script>
    ```
  ::
  ::CodeSnippet
    ```js
          const titleElement = document.querySelector('h1')
          titleElement.innerText = 'Nosso site'
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
        </script>
      </body>
    </html>
    ```
  ::
::

Com isso é possível notar a alteração do título na página web.

## Qual a diferença do DOM para o Virtual DOM?

Pense no DOM como se fosse um prédio e o Virtual DOM a sua planta, ou seja, o Virtual DOM é uma representação do DOM em formas de objetos Javascript.

Virtual DOM não é uma ferramenta, é um padrão de representação.

::Callout
Para saber mais sobre Virtual DOM e suas vantagens, veja [O que é Virtual DOM?](/glossary/virtual-dom)
::

## O que é querySelector?

O querySelector é um método da API do DOM que permite buscar um nó do DOM baseado no parâmetro recebido.

O parâmetro do querySelector é uma string contendo um seletor CSS, por exemplo:

```javascript
document.querySelector('.container > h1.title')
```

<!-- TODO: Future link
::Callout
Para saber mais sobre seletores CSS leia este artigo falando sobre [20 seletores CSS e exemplos de quando utilizá-los]().
::
-->

Existem outros métodos semelhantes ao querySelector e que podem ser úteis na manipulação do DOM, como:

- [querySelectorAll](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll): Recebe um seletor CSS como parâmetro e retorna uma lista de nós que se encaixam no seletor recebido.
- [getElementById](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById): Recebe o id (string) de um elemento do DOM como parâmetro e retorna o nó do DOM que contém este id.
