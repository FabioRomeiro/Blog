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

Trabalho com SEO faz um tempo, e existe um principal fator que faz um site ganhar posição no Google, conteúdo!
Dado isso decidi dar a cara a tapa e começar a gerar conteúdo para disputar lugar no ranking das pesquisas.

Criar um blog é muito trampo. **Back-end, banco de dados, infraestrutura, segurança, etc, eu não quero nada disso!**
Só quero escrever num site próprio.

Com o Nuxt Content é possível criar **um blog inteiro onde você só tem que se preocupar em escrever o conteúdo** do formato
que achar melhor! Se quiser ver o quão simples é começar a escrever com essa ferramenta, de uma olhada
[nesse vídeo de 3 minutos](https://www.youtube.com/watch?v=o9e12WbKrd8) que eles disponibilizam na documentação.

## Começando o projetinho 🏗️

O blog que vamos construir é esse aqui: [Demo blog](https://demo-blog.fabioromeiro.dev). Vamos um pouco além do vídeo referenciado na seção anterior, vamos estruturar melhor o projeto pensando em escalabilidade e manutenção.

Se você só está aqui para ver o código final, tudo bem, tá aqui o [Código fonte](https://github.com/fabioromeiro/demo-blog).

> A vida é curta demais pra ler textos 🙃

Mas se quiser ver o passo a passo de como foi construído, só seguir lendo!

### Versões usadas
- Node: v16.15.0
- Npm: v8.5.5
- Nuxt: v3.0.0
- Nuxt Content: v2.0.1

### 1) Inicializa projeto com Nuxt Content

Primeiro passo, vamos criar um projeto Nuxt. No terminal entre na pasta que deseja adicionar o projeto e rode

```bash
npx nuxi init demo-blog -t content
```

(Troque *demo-blog* pelo nome do seu projeto)

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

### 2) Entendendo a estrutura do projeto

Então, o seu blog já está funcionando, é possível escrever conteúdos e navegar pelas páginas, porém ainda não tem sua cara.

Para customiza-lo, vamos entender como está estruturado.




