---
title: Como criar um blog com Nuxt Content
description: Aprenda a criar um blog com Nuxt 3 e Nuxt Content 2. Sem back-end, apenas front-end utilizando o poder e facilidade do nuxt. Se preocupe apenas em escrever o conteúdo.
publicationDate: '08/11/2022'
tags:
  - Front-end
  - Nuxt
  - Vue
---

## Não quero back-end 🤢

Criar um blog é muito trampo. **Back-end, banco de dados, infraestrutura, segurança, etc, eu não quero nada disso!**
Só quero escrever num site próprio. Com Nuxt Content é possível criar **um blog inteiro onde você só tem que se preocupar em escrever o conteúdo** do formato
que achar melhor! Se quiser ver o quão simples é começar a escrever com essa ferramenta, de uma olhada
[nesse vídeo de 3 minutos](https://www.youtube.com/watch?v=o9e12WbKrd8) que eles disponibilizam na documentação.

## O projeto 🏗️

1) [Inicialização do projeto](#1-inicialização-do-projeto)
2) [O primeiro post](#2-o-primeiro-post)
3) [Componentes](#3-componentes)
4) [Layouts](#4-layouts)
5) [Estilização](#5-estilização)
6) [Metatags](#6-metatags)
7) [Deploy](#7-deploy)
8) [Aprimorando](#8-aprimorando)

<horizontal-grid :gap="2" center>

  <highlight-link href="https://demo-blog.fabioromeiro.dev" label="Demo" icon="link"></highlight-link>

  <highlight-link href="https://demo-blog.fabioromeiro.dev" label="Código fonte" icon="github"></highlight-link>

</horizontal-grid>

### Versões usadas
- Node: v16.15.0
- Npm: v8.5.5
- Nuxt: v3.0.0
- Nuxt Content: v2.0.1

### 1) Inicialização do projeto

Primeiro passo, vamos criar um projeto Nuxt Content. No terminal entre na pasta que deseja adicionar o projeto e rode o comando

> Troque **demo-blog** pelo nome do seu projeto

```bash
npx nuxi init demo-blog -t content
```

Em seguida entre no diretório criado

```bash
cd demo-blog
```

Instale as dependencias

```bash
npm install
```

Em seguida abra a pasta na sua IDE. Para quem usa VSCode digite o comando:

```bash
code .
```

Agora rode o projeto localmente com o comando:

```bash
npm run dev
```

Com isso você deve conseguir acessar o projeto no navegador pelo link [http://localhost:3000].

### 2) O primeiro post

No diretório *content* crie um arquivo chamado *meu-primeiro-post.md*.

Dentro dele digite qualquer coisa, por exemplo:

```md
Hello world
```

Este post que você acabou de criar é automaticamente transformado em uma página que fica
disponível em: [localhost:3001/meu-primeiro-post](http://localhost:3001/meu-primeiro-post)

Note que a url do post corresponde ao nome do arquivo criado, *meu-primeiro-post*. Se o nome
do arquivo fosse *outro-post.md*, este ficaria disponivel na url *localhost:3001/**outro-post***.

Como o post é escrito em markdown, você pode utilizar de todas as funcionalidades desta linguagem,
que quando o usuário acessar seu post, o nuxt content converte automáticamente para HTML.

Por exemplo, troque o conteudo de *meu-primeiro-post.md* para:

```md
# Meu primeiro post

Um conteúdo muito legal e interessante
```

Ao salvar e ver no navegador as alterações, notará que agora possui um titulo, que corresponde a
um *h1* do HTML, e um texto abaixo, que virou um *p*.

::HorizontalGrid{center}
![Print do primeiro post no Nuxt Content](../../assets/images/posts/como-criar-um-blog-com-nuxt-content/print-1.png)
::

Para mais informações e dicas de Markdown, recomendo este
[guia de sintaxe da linguagem](https://www.markdownguide.org/extended-syntax).


### 3) Componentes

-----------
FAZER SOBRE LISTAGEM DE POSTS  
-----------

Alguns posts deste blog vão precisa de uma mensagem de aviso antes falando as informações estão deprecadas.

Você poderia toda vez que for escrever um post copiar e colar a mensagem inteira de um para o outro, porém componentiza-la seria a melhor solução.

Para isso, crie na raiz o projeto um diretório chamado components, onde ficarão todos os componentes do projeto.

```bash
mkdir components
```

Dentro de components, cria um diretório onde ficarão os componentes que serão utilizados dentro dos conteúdos:

```bash
cd components
mkdir content
```

Dentro deste novo diretório, adicione um novo arquivo que será o nosso componente, ele poderá se chamar `DeprecatedMessage.vue`

```bash
cd content
touch DeprecatedMessage.vue
```

Agora neste arquivo, coloque o seguinte conteúdo:

```html
<template>
  <p>Atenção, o conteúdo deste post está deprecado!</p>
</template>
```

Com o componente criado, adicione-o dentro do seu post com a seguinte sintaxe:

```markdown
# Meu primeiro post

Um conteúdo muito legal e interessante

:DeprecatedMessage
```

O nuxt lida importa o componente automáticamente, então não precisa se preocupar com isso.

Pode ser que o componente não apareça e um erro seja exibido no console, isso acontece pois um novo arquivo de componente foi criado e o nuxt não conseguiu identifica-lo. Para resolver, basta parar o blog no terminal e rodar novamente.

Queremos que o componente seja mais flexivel, além da mensagem padrão escrita nele, eu quero colocar mais conteúdo abaixo da mensagem.

É possível fazer isso utilizando slots.

Modifique o componente para receber um slot abaixo da mensagem:

```html
<template>
  <div>
    <p>Atenção, o conteúdo deste post está deprecado!</p>
    <slot></slot>
  </div>
</template>
```

O componente deve continuar funcionando normalmente no post daquela maneira que preenchemos anteriormente, mas para preencher o slot, é necessário fazer desta maneira:

```markdown
# Meu primeiro post

Um conteúdo muito legal e interessante

::DeprecatedMessage
  Recomendo que leia a documentação da tecnologia para ficar mais atualizado.
::
```

Desta maneira o resultado final deve ser:

::HorizontalGrid{center}
![Print do post com novo componente](../../assets/images/posts/como-criar-um-blog-com-nuxt-content/print-2.png)
::

### 4) Layouts

### 5) Estilização

### 6) Metatags

### 7) Deploy

### 8) Aprimorando
