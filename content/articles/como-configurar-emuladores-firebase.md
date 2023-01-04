---
title: Como configurar emuladores do Firebase?
description: Testar em produção nunca é legal, pode acontecer muita coisa de ruim, o ideal é sempre testarmos em um ambiente controlado e então mandarmos para o cliente. Neste artigo vou mostrar como rodar os serviços do Firebase localmente.
publicationDate: 04/01/2023
cover:
  src: /images/articles/como-configurar-emuladores-firebase/cover.jpg
  alt: Conversa entre duas pessoas destacando a superioridade de se testar localmente ao invés de em produção
tags:
  - Front-end
  - Firebase
---

## O que são emuladores do Firebase?

O Firebase permite que você crie uma credencial de teste para ser utilizada online sem correr o risco de afetar o ambiente de produção, porém além de que ela possui um limite de expiração, ainda é necessário o acesso online.

Para resolver este problema e facilitar a nossa vida no debug do sistema o Firebase oferece emuladores, que são ferramentas que permitem rodar uma especie de “Firebase local” na sua máquina.

## Instalando os emuladores

Para instalar os emuladores vamos utilizar o Firebase CLI

::Callout
Caso não tenha o Firebase CLI instalado veja o passo a passo [nesta página da documentação](https://firebase.google.com/docs/cli#install_the_firebase_cli) (é bem rapidinho)
::

Os emuladores rodam em Java, então é necessário te-lo instalado na sua máquina. Para a escrita deste artigo utilizei a versão 18.

::Callout
Veja como instalar o Java 18 no ubuntu aqui [neste artigo do Blog do Edivaldo](https://www.edivaldobrito.com.br/como-instalar-o-oracle-java-jdk-18-no-ubuntu-22-04-e-20-04/).
::

::Callout
Se não quiser precisar instalar todas essas coisas na sua máquina, e se tiver dominio dessa ferramenta, recomendo criar um container docker que expõe as portas dos emuladores (que iremos configurar em seguida).
::

Neste artigo estaremos instalando os emuladores do Firestore e do serviço de autenticação. No terminal, no diretório raiz do seu projeto rode o comando:

```bash
firebase init emulators
```

Ao rodar o comando serão feitas uma série de perguntas, sendo a primeira:

```bash
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm y
our choices.
```

Selecione (com a tecla espaço e as teclas direcionais de cima e baixo) as opções `Firestore Emulator`, `Authentication Emulator` e qualquer outro serviço que achar relevante.

Em seguida defina as portas que serão utilizadas pelos emuladores, eu normalmente sigo com as padrões sugeridas

```bash
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the hosting emulator? 5000
```

Eu recomendo também instalar o `Emulator UI`, que é uma interface amigável para gerenciar os emuladores e interagir com os serviços. Deixe a resposta da pergunta sobre a porta do UI em branco caso queira que seja utilizada qualquer porta disponível no momento.

```bash
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)?
```

Por fim selecione `Yes` para baixar os emuladores:

```bash
? Would you like to download the emulators now? Yes
```

Com isso você verá que será criado (ou modificado caso ja existente antes) o arquivo `firebase.json`, nele está todas as configurações dos emuladores.

## Rodando os emuladores

Os emuladores já estão instalados, agora rode-os com o comando:

```bash
firebase emulators:start
```

Acesse a url exibida no console após o comando e você verá uma tela como essa

![Interface do Emulator UI](/images/articles/como-configurar-emuladores-firebase/emulatorUI.png)

Este é o `Emulator UI` instalado anteriormente, e através dele você pode navegar pelos emuladores e verá uma interface semelhante ao do console do Firebase online.

## Utilizando os emuladores com o projeto

Agora precisamos configurar o projeto para que ele use os emuladores quando estivermos rodando o site localmente.

Para isso vá até onde o firebase está sendo configurado no seu projeto e, como estamos utilizando os serviços Firestore e Auth, importe os metodos dos respectivos modulos

::FileSnippet{fileName=firebase.js}
  ::CodeSnippet{toggleable}
    ```js
    import { initializeApp } from 'firebase/app'
    ```
  ::
  ::CodeSnippet
    ```js
    import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
    import { getAuth, connectAuthEmulator } from 'firebase/auth'
    ```
  ::
  ::CodeSnippet{toggleable}
    ```js
    import { config } from './config'

    const firebaseApp = initializeApp(config)
    const firestore = getFirestore(firebaseApp)
    const auth = getAuth(firebaseApp)
    ```
  ::
::

Com isso vamos criar uma condição para verificar se o site esta sendo rodado em ambiente local verificando o hostname

::FileSnippet{fileName=firebase.js}
  ::CodeSnippet{toggleable}
    ```js
    import { initializeApp } from 'firebase/app'
    import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
    import { getAuth, connectAuthEmulator } from 'firebase/auth'
    import { config } from './config'

    const firebaseApp = initializeApp(config)
    const firestore = getFirestore(firebaseApp)
    const auth = getAuth(firebaseApp)
    ```
  ::
  ::CodeSnippet
    ```js
    if (location.hostname === 'localhost') {
    }
    ```
  ::
::

::Callout
Existem outras soluções mais elegantes tipo remover o trecho do código quando necessário utilizando webpack ou coisas do tipo, mas para manter o artigo o menor possivel vamos manter desta maneira.
::

Em seguida vamos adicionar as configurações dos emuladores de cada serviço

::FileSnippet{fileName=firebase.js}
  ::CodeSnippet{toggleable}
    ```js
    import { initializeApp } from 'firebase/app'
    import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
    import { getAuth, connectAuthEmulator } from 'firebase/auth'
    import { config } from './config'

    const firebaseApp = initializeApp(config)
    const firestore = getFirestore(firebaseApp)
    const auth = getAuth(firebaseApp)
    ```
  ::
  ::CodeSnippet
    ```js
    if (location.hostname === 'localhost') {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
      connectFirestoreEmulator(firestore, 'localhost', 8080)
    }
    ```
  ::
::

Os dois metodos fazem a conexão do app ao emulador, eles possuem os parametros diferentes mas são semelhantes.

No metodo `connectAuthEmulator` o primeiro parâmetro é o objeto retornado pelo `getAuth`, o segundo é a url para o emulador, que normalmente é “*http://localhost:”* mais a porta escolhida na instalação do emulador. Por fim o terceiro metodo é um objeto com a chave `disableWarnings` que faz com que seja removido o banner na tecla indicando que o emulador esta ativo e que esta configuração não deve ser aplicada em produção.

No metodo `connectFirestoreEmulator` o primeiro parâmetro é o objeto retornado pelo `getFirestore`, o segundo é o hostname do emulador, neste caso quase sempre será *“localhost”*, e o terceiro é a porta configurada na instalação do emulador.

::Callout
As configurações podem variar no formato para cada serviço, por isso caso esteja utilizando algum outro serviço, recomendo dar uma olhada [nesta parte da documentação](https://firebase.google.com/docs/emulator-suite/connect_and_prototype#connect_your_app_to_the_emulators) para descobrir como configurar o emulador nele.
::

## Como utilizar dados de produção para testar no local?

Muitas vezes para investigar um bug que aconteceu em produção temos que recriar as informações envolvidas no ocorrido para entender melhor a causa raiz. O Firebase facilita este processo para nós.

Ao rodar os emuladores podemos adicionar a opção `--import=<diretorio>` para pegar as informações de produção e adiciona-las no seu local.

```bash
firebase emulators:start --import=./local
```

Este pode ser um processo demorado, para evitar ter que toda vez buscar a informação de prod, podemos adicionar a opção `--export-on-exit`, com ela quando a aplicação for encerrada o arquivo criado com as informações será mantido e reutilizado na proxima execução dos emuladores.

```bash
firebase emulators:start --import=./local --export-on-exit
```

## Conclusão

Isso deve ser o suficiente para o seu projeto estar utilizando os emuladores ao invés dos servidores online, é possível fazer um teste cadastrando algo pelo seu app e vendo refletir no emulador do serviço que está armazenando esta informação.
