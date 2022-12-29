---
title: Como gerar e configurar chaves SSH no Github?
description: Vou ser honesto, este artigo aqui é mais uma colinha para eu lembrar os comandos para fazer isso, pois por algum motivo, mesmo depois de anos desenvolvendo eu nunca lembro de cabeça o que fazer.
publicationDate: 27/12/2022
tags:
  - Git
  - Github
---

## Gerando a chave

1. No terminal digite o comando: `ssh-keygen -t rsa` (`-t` especifíca o tipo de chave que vai ser gerada, nesse caso vamos utilizar RSA)
2. Confirme (ou altere) o diretório onde serão criadas as chaves.
3. Em seguida, **se quiser**, defina a senha que será requisitada toda vez que a chave for ser utilizada (em ações de `push`, `pull`, `fetch` ou qualquer outra que precise fazer conexão com o repositório remoto).
4. Por fim as chaves pública e privada devem estar disponíveis no diretório `~/.ssh`.

## Configurando no Github

1. Em qualquer tela do Github (considerando que está logado no site) clique na sua foto no canto superior direito.
2. Um menu se abrirá, então clique em _"Settings"_ (_"Configurações"_)
3. Na tela de configurações, no menu esquerdo clique em _"SSH and GPG keys"_ (_"Chaves SSH e GPG"_)
4. No canto superior direito da seção que se abriu, clique em _"New SSH key"_ (_"Nova chave SSH"_)
5. No teminal rode o comando cat `~/.ssh/id_rsa.pub` e copie todo o conteúdo que será exibido no terminal, incluindo o prefixo `ssh-rsa`  (ou rode `xclip -sel c < ~/.ssh/id_rsa.pub` caso tenha `xclip` instalado)
6. No campo de texto da página do Github, cole o conteúdo copiado e clique em _"Add SSH key"_ (_"Adicionar chave SSH"_)

Pronto, suas chaves devem estar funcionando normalmente 😃
