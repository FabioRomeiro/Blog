---
title: Como melhorar o SEO do seu blog com Nuxt Content?
description: Conteúdo é o que mais importa quando se trata de um bom SEO, mas para que os buscadores consigam acessar e indexar seu site mais facilmente podemos aplicar as boas práticas abordadas neste artigo.
publicationDate: 12/16/2022
tags:
  - Front-end
  - Nuxt
  - Vue
  - SEO

---

## SEO é todo sobre conteúdo ✍️

Se tem uma coisa que aprendi estudando e trabalhando com SEO, é que no final, o que importa mesmo é o conteúdo do seu site. Ele pode não ter a melhor performance do mercado, pode não ter a tecnologia mais nova, mas **se ele for rico em conteúdo, ele vai disputar com os grandes concorrentes no primeiro lugar do Google**, e isso leva tempo e muito esforço. 😩

Mas se você está aqui, você já está no caminho certo, pois um **blog é um paraíso de conteúdo** relevante para o seu público alvo!

Quem decide se seu conteúdo é relevante ou não são os buscadores, por isso **precisamos facilitar o máximo possível que eles entendam seu conteúdo e consigam extrair o máximo de informação**. Fazemos isso estruturando bem nosso HTML, utilizando os headers (h1, h2, h3, …) corretamente e seguindo as regras de semantica do HTML5, mas, principalmente, investindo nas nossas **metatags**, **robots.txt** e **sitemap**!

::Callout{type=warning}
Neste artigo estou considerando as tecnologias nas seguintes versões:

- Node: v16.15.0
- Npm: v8.5.5
- Nuxt: v3.0.0
- Nuxt Content: v2.0.1
::

::Callout{type=warning}
Neste artigo **estarei utilizando Composition API**, mas as soluções são completamente adaptáveis para o Options API.
::

::Callout
Recomendo a utilização da extensão de navegador [SEO META in 1 CLICK](https://chrome.google.com/webstore/detail/seo-meta-in-1-click/bjogjfinolnhfhkbipphpdlldadpnmhc), ela facilita bastante a visualização de metatags nas páginas.
::

## Metatags globais 🌐

Metatags ajudam a explicitar sobre o que seu site fala e como deve ser representado quando for referenciado por outros sistemas.

Algumas metatags são obrigatórias e **precisam estar em todas as páginas**. Desenvolvendo um site do zero você teria o trabalho de manualmente configurar todas as metatags para cada uma das páginas, mas o Nuxt nos ajuda neste quesito.

Nesta seção do artigo vamos adicionar as configurações padrões que serão aplicadas em todas as páginas que não tenham alguma dessas configurações específicas explicitada.

Tem dois lugares que são ideais de se configurar suas metatags globais, pode ser no arquivo `nuxt.config.ts`, ou no `app.vue`. Particularmente eu prefiro configurar no `app.vue` e deixar o `nuxt.config.ts` apenas para configurações modulos, builds, etc.

Na tag script do seu app.vue, chame a composable `useHead` passando um objeto vazio como parâmetro.

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({})
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

Esta composable é responsável por adicionar as metatags na página e, como ela está no arquivo principal do projeto, ela vai ser aplicada para todas as páginas.

### Title e Description

As duas metatags mais importantes são o titulo e a descrição, então vamos adiciona-las:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Desenvolvedor Front-end | Fábio Romeiro',
      description: 'Me chamo Fábio Romeiro, escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.'
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

Ao acessar a aplicação é possível ver, através de um plugin de SEO, o título e a descrição já aplicados caso sua página não tenha alguma dessas configurações específicadas.

Vamos supor que você queira que o sufixo “*| Fábio Romeiro”* se aplique para todos os títulos e que você não queira ter que lembrar de ficar colocando, você pode fazer isso através da propriedade `titleTemplate`:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Desenvolvedor Front-end',
      titleTemplate: '%s | Fábio Romeiro',
      description: 'Me chamo Fábio Romeiro, escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.'
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

O simbolo *%s* representa onde seu título ficará neste template, desta maneira todos os títulos seguirão este template.

### Favicon

Seu site tem que ser reconhecido de longe. O usuário precisa saber, sem ter que ler o nome, que aquela uma aba aberta entre outras 20 é do seu site! Por isso uma logo chamativa e única é a melhor alternativa para ganhar destaque.

No HTML normal, nós colocariamos o favicon desta maneira:

```html
<link rel="icon" href="https://fabioromeiro.dev/favicon.svg" type="image/x-icon" />
```

Porém, nesse caso, para colocar junto com as outras temos que adaptar essa tag HTML para um objeto javascript:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Desenvolvedor Front-end',
      titleTemplate: '%s | Fábio Romeiro',
      description: 'Me chamo Fábio Romeiro, escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/x-icon' }
      ]
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

No HTML podem existir diversas tags link (como vamos ver afrente neste artigo), por isso na versão javascript o link é representado como uma lista de objetos, onde cada objeto representa uma tag que seria colocada no HTML, e cada propriedade desse objeto representa o atributo equivalente da tag.

::Callout{type=warning}
Lembrando que para deixar seu favicon (e qualquer outro arquivo estático) disponível pelo navegador você precisa coloca-lo dentro do diretório `public`, na raiz do projeto.
::

### Author

Agora finalizando o básico na implementação das metatags globais, faltaram as tags meta. Então suponha que eu quero colocar o autor em todas as páginas, uma página pode ter também multiplas tags meta, por isso sua implementação também é em forma de lista:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Desenvolvedor Front-end',
      titleTemplate: '%s | Fábio Romeiro',
      description: 'Me chamo Fábio Romeiro, escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'author', content: 'Fabio Romeiro' }
      ]
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

### Outras metatags

Seguindo a mesma lógica que as metatags adicionadas até agora você pode implementar outras, como:

- robots
- og:site_name
- og:type
- og:image
- msapplication-TileImage
- og:image:type
- og:image:width
- og:image:height

### Atributos do HTML

Antes de finalizar a seção é legal falar dessa configuração que vai tornar a vida de muito usuário levemente mais feliz.

O HTML tem atributos específicos que ditam informações da página, por exemplo, o idioma do conteúdo podemos definir desta maneira:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Desenvolvedor Front-end',
      titleTemplate: '%s | Fábio Romeiro',
      description: 'Me chamo Fábio Romeiro, escrevo artigos sobre tecnologias como Javascript, Vue.js, Nuxt.js e CSS.',
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'author', content: 'Fabio Romeiro' }
      ],
      htmlAttrs: {
        lang: 'pt-br'
      }
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

Esta pequena alteração vai fazer o Google Tradutor parar de encher o saco pedindo pra traduzir a página do inglês para o português quando a página já está em português.


## Metatags específicas nas páginas 🔍

Já temos a configuração aplicada para todo o site, mas não queremos que todos possuam o mesmo titulo e a mesma descrição, queremos algo mais descritivo para a página (além de que títulos duplicados no site são penalizados).

Então vamos entrar em uma página específica e torná-la única.

### Title

Para configurarmos as metatags utilizamos a mesma composable que usamos no `app.vue`, dado isso, vamos supor que queremos configurar a página dos posts.

O código da página responsável pelos posts vai provavelmente estar dentro de um arquivo com o nome semelhante a: `[…slug].vue`.

Com isso, vamos definir o novo titulo da página de post:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Post'
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

Se você ver, o título da página mudou, e se você for para outra vai ver que continua normal como configuramos, isso acontece pois a configuração específica da página tem uma maior prioridade do que a geral.

Isso vale para qualquer metatag.

Por tudo isso ser feito programaticamente pelo Javascript você consegue deixar a configuração das suas metatags o quão dinâmicas você quiser, por exemplo, colocar no titulo da página o titulo do post através do [queryContent do Nuxt Content](https://content.nuxtjs.org/api/composables/query-content/).

### Canonical

O canonical é a metatag desconhecida mais importante, pois ela define qual a URL da sua página a ser considerada pelos mecanismos de busca.

Explicando brevemente o canonical, imagine que essa é uma página do seu site: `https://www.meublog.com/posts`. Esta página possui uma paginação de posts, e a paginação é feita pela url, então se eu for para página 2 a url ficará algo assim: `https://www.meublog.com/posts?pagina=2`. É a mesma página web, só que com conteúdos diferentes. Se você não especificar o canonical, as duas serão tratadas como sendo páginas diferente.

Qual o problema disso? O ideal é sempre você ter uma página super forte no seu site, que vai ser a mais relevante no google, pois quanto mais relevante, mais acima nos resultados das buscas sua página ficará. Com isso também é maior a chance dos usuários saírem dessa página, explorarem o resto do seu site e eventualmente lerem seu conteúdo ou comprarem seu produto.

Por conta disso o canonical existe, ele deve apontar para a página sem nenhuma querystring ou parâmetro que modifique a URL principal, a menos que essa seja sua estratégia, claro.

Vamos adicionar o canonical no head:

::FileSnippet{fileName=app.vue}
  ::CodeSnippet{toggleable}
    ```html
    <script setup>
    ```
  ::
  ::CodeSnippet
    ```js
    useHead({
      title: 'Post',
      link: [
        {
          rel: 'canonical',
          href: 'https://fabioromeiro.dev/posts/como-melhorar-o-seo-do-seu-blog-com-nuxt-content'
        }
      ]
    })
    ```
  ::
  ::CodeSnippet{toggleable}
    ```html
    </script>
    ```
  ::
::

## Sitemaps 🗺️

Estamos quase acabando as configurações! Sitemap significa mapa do site, ele é quem vai guiar os robôs dos buscadores quando eles estiverem passando pelo nosso site. Por conta disso precisamos ter todos os conteúdos mais relevantes e mais atualizados dentro do mapa do site.

Uma maneira de fazer isso seria criando um arquivo xml no diretório public com este formato:

::FileSnippet{fileName=public/sitemap.xml}
  ::CodeSnippet
    ```html
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url>
        <loc>https://www.fabioromeiro.dev/</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.fabioromeiro.dev/posts</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://www.fabioromeiro.dev/posts/como-melhorar-o-seo-do-seu-blog-com-nuxt-content</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    </urlset>
    ```
  ::
::

E então ir adicionando uma `<url>` para cada vez que publicarmos um post.

Mas o negócio é, eu sou muito preguiçoso para isso, por isso vamos configurar o sitemap uma única vez e depois você vai poder esquecer que ele existe!

Para fazer isso o primeiro passo é instalar o pacote `sitemap`, do npm, e salvar como uma dependência de desenvolvimento.

(Vou instalar a versão 7.1.1 pois é a que estou utilizando no momento da escrita deste artigo)

```bash
npm install -D sitemap@7.1.1
```

Agora vamos criar um server handler para gerar este sitemap dinâmicamente.

O primeiro passo é criar um arquivo chamado `sitemap.xml.ts` no diretório `server/routes`, na raiz do projeto. Se estes diretórios não existirem, os crie.

::Callout
  O motivo de ficar nesse diretório em específico é por conta de nova funcionalidade do nuxt que permite criar server handlers, todos os handlers ficam dentro de `server`, e os handles dentro de `routes` ficam disponiveis pela url, por exemplo, se possuir um handler chamado `hello.ts`, ele ficará disponivel em `https://meublog.com/hello`. Para saber mais veja esta [página da documentação](https://nuxt.com/docs/guide/directory-structure/server).
::

Neste arquivo a primeira coisa que faremos é importar dois módulos, o de conteúdo e o de sitemap, que acabamos de instalar:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
::

Para o nosso plugin funcionar, precisamos exportar nosso handler que será executado:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
  ::CodeSnippet
    ```ts
    export default defineEventHandler(async (event) => {

    })
    ```
  ::
::

Dentro dela é onde implementaremos a nossa regra de negócio. A primeira coisa que farei é criar um SitemapStream onde faremos a escrita no sitemap, passando a url base do site como hostname para que seja aplicado nas urls mapeadas.

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
  ::CodeSnippet
    ```ts
    export default defineEventHandler(async (event) => {
      const sitemap = new SitemapStream({
        hostname: 'https://www.fabioromeiro.dev'
      })
    })
    ```
  ::
::

Em seguida listaremos todos os nossos conteúdos através de uma query no serviço de conteúdo do Nuxt Content. Como esta query lista apenas os conteúdos do projeto, não necessariamente todas as páginas, lembre de adicionar as faltantes caso existam:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
  ::CodeSnippet
    ```ts
    export default defineEventHandler(async (event) => {
      const sitemap = new SitemapStream({
        hostname: 'https://www.fabioromeiro.dev'
      })

      const docs = await serverQueryContent(event).find()
      const pages = [
        { _path: '/' },
        { _path: '/posts' },
        ...docs
      ]
    })
    ```
  ::
::

Agora vamos finalmente salvar essas páginas dentro do sitemap:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet{toggleable}
    ```ts
      import { serverQueryContent } from '#content/server'
      import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
  ::CodeSnippet
    ```ts
    export default defineEventHandler(async (event) => {
      const sitemap = new SitemapStream({
        hostname: 'https://www.fabioromeiro.dev'
      })

      const docs = await serverQueryContent(event).find()
      const pages = [
        { _path: '/' },
        { _path: '/posts' },
        ...docs
      ]

      for (const page of pages) {
        sitemap.write({
          url: page._path,
          changefreq: 'monthly'
        })
      }
      sitemap.end()
    })
    ```
  ::
::

Dessa maneira estou registrando todas as urls no sitemap e afirmando que a frequência em que elas são atualizadas é mensal, se para o seu caso for diferente, pode mudar.

Em aplicações da vida real, algumas páginas possuem mais prioridades que outras, pois queremos dar mais destaque. Nessa situação estamos dando o mesmo nivel de prioridade para todas as paginas do site, vamos mudar isso.

No meu contexto a página incial é a mais importante, então darei prioridade 1 para ela, a de posts é a segunda mais importante, darei 0.9, e as demais, serão 0.8:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet{toggleable}
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'
    ```
  ::
  ::CodeSnippet
    ```ts
    export default defineEventHandler(async (event) => {
      const sitemap = new SitemapStream({
        hostname: 'https://www.fabioromeiro.dev'
      })

      const priorityMap = {
        '/': 1.0,
        '/posts': 0.9
      }

      const docs = await serverQueryContent(event).find()
      const pages = [
        { _path: '/' },
        { _path: '/posts' },
        ...docs
      ]

      for (const page of pages) {
        sitemap.write({
            url: page._path,
            priority: priorityMap[page._path] || 0.8,
            changefreq: 'monthly'
        })
      }
      sitemap.end()
    })
    ```
  ::
::

Por fim, vamos retornar o sitemap que vai ser montado no build do nosso projeto:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet
    ```ts
    import { serverQueryContent } from '#content/server'
    import { SitemapStream, streamToPromise } from 'sitemap'

    export default defineEventHandler(async (event) => {
      const sitemap = new SitemapStream({
        hostname: 'https://www.fabioromeiro.dev'
      })

      const priorityMap = {
        '/': 1.0,
        '/posts': 0.9
      }

      const docs = await serverQueryContent(event).find()
      const pages = [
        { _path: '/' },
        { _path: '/posts' },
        ...docs
      ]

      for (const page of pages) {
        sitemap.write({
          url: page._path,
          priority: priorityMap[page._path] || 0.8,
          changefreq: 'monthly'
        })
      }
      sitemap.end()

      return streamToPromise(sitemap)
    })
    ```
  ::
::

Agora nosso server handler está pronto, porém, precisamos fazê-lo ser pre-renderizado no build do projeto, para isso, dentro do arquivo nuxt.config.ts adicione a configuração do nitro:

::FileSnippet{fileName=server/routes/sitemap.xml.ts}
  ::CodeSnippet
    ```ts
    import { defineNuxtConfig } from 'nuxt'

    // https://v3.nuxtjs.org/api/configuration/nuxt.config
    export default defineNuxtConfig({
      modules: [
        '@nuxt/content'
      ],
      nitro: {
        prerender: {
          routes: ['/sitemap.xml']
        }
      }
    })
    ```
  ::
::

Agora o sitemap está disponível.

## Robots.txt 🤖

Essa última seção do artigo é bem curta, até porque não tem tanta complexidade técnica, mas é bem importante.

Robots.txt é um arquivo estático que guia os mecanismos de busca sobre onde eles devem procurar conteúdo e onde eles não devem.

::Callout
Para mais informações, eu recomendo este [artigo da rockcontent](https://rockcontent.com/br/blog/robots-txt/).
::

Este arquivo precisar estar disponível no seu site através da url: `https://meublog.com/robots.txt`.

E para facilitar nossa vida, é bem simples disponibilizar qualquer arquivo estático desta maneira com o nuxt, é só adiciona-lo no diretorio `public`, na raiz do projeto.

Dado isso, dentro desse diretório crie o arquivo robots.txt, e coloque o conteúdo dentro. No meu caso vou referenciar o sitemap e não vou querer bloquear nenhuma página específica do meu site, os buscadores poderão ver tudo, então o conteúdo será:

::FileSnippet{fileName=public/robots.txt}
  ::CodeSnippet
    ```
    User-agent: *

    Sitemap: https://fabioromeiro.dev/sitemap.xml
    ```
  ::
::

## Conclusão

Com isso adicionamos as configurações mais importantes para se ter no seu website e aumentar suas chances de conseguir uma boa posição nos resultados de buscas.

Agora é investir seu tempo e energia na escrita desses conteúdos e provar que você é digno do primeiro lugar!
