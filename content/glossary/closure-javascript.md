---
title: O que é Closure em Javascript?
subject: Closure em Javascript
isPluralSubject: false
description: Clique para saber mais sobre Closure em Javascript, aproveite também para explorar mais conteúdos sobre Front-end e Javascript.
publicationDate: 13/01/2022
tags:
  - Front-end
  - Javascript
---

Podemos resumir assim:

Closure é um padrão onde uma função pai retorna uma função filha que possui acesso às variáveis, funções e outros estados da função pai. Por exemplo:

```js
function getIncrementer () {
	let counter = 0
	return function () {
		counter++
		console.log(counter)
	}
}

const incrementCounter = getIncrementer()
incrementCounter() // 1
incrementCounter() // 2
```

No exemplo acima a função `getIncrementer` define a variavel `counter` e retorna uma função anônima que soma 1 ao contador e exibe no console o valor de `counter`.

Em seguida é atribuido a constante `incrementCounter` o resultado de `getIncrementer`, que é a função anônima responsavel por incrementar a variavel `counter` e exibir seu valor no console.

Ao executar a função atribuida a `incrementCounter` o counter, variavel criada dentro do escopo de `getIncrementer`, é incrementado e é exibido no console o valor 1.

Ao executar a função novamente o valor exibido no console é 2, isso acontece pois o estado sendo incrementado é o mesmo incrementado na primeira execução. Este ocorrido é conhecido como closure, onde o escopo do contexto de execução (Execution Context) da função pai (`getIncrementer`) é passado ao filho.

## Quando Closure é utilizado?

Closure pode ser utilizado em uma escala menor ou então em grandes escalas, por exemplo, pode ajudar uma funcionalidade que permite que uma função possa ser executada apenas uma vez.

Exemplo de Once (função que pode ser utilizada apenas uma vez):

```js
function once (cb) {
	let executed = false
	return () => {
		if (executed) {
			throw Error('Esta função já foi executada antes :(')
		}
		executed = true
		cb()
	}
}

const myFunction = once(() => console.log('Vou aparecer só uma vez :)'))
myFunction() // Vou aparecer só uma vez :)
myFunction() // Uncaught Error: Esta função já foi executada antes :(
```

Closure também pode ser utilizado para definir modulos com estados próprios.

Por exemplo, imagine que existe o resultado de uma query bem pesada que precisa ser utilizado em vários lugares em uma parte do sistema, poderia colocar este resultado em um contexto global mas seria um tanto vago e confuso se toda a aplicação tivesse acesso a aquela informação que é utilizada em apenas um trecho especifico do código, por isso faz sentido coloca-la em um estado de um modulo:

```js
function userModule () {
	const user = {}

	return {
		getUserName: () => user.name,
		setUserName: (name) => user.name = name
	}
}

const { getUserName, setUserName } = userModule()
getUserName() // undefined
setUserName('Marcus')
getUserName() // 'Marcus'
```

## Como funcionam Closures?

Ao executar uma função é sempre criado um Execution Context que possui uma Local Memory. Este Execution Context quando criado é adicionado a uma Call Stack e depois eliminado quando finalizado.

Traduzindo para português esta frase: Ao chamar uma função, um contexto temporário de execução (onde o código é executado) é criado e adicionado a uma pilha de chamadas (funcionalidade que mantém o interpretador ciente de em que contexto do código ele se encontra no momento da execução), e depois de finalizada a execução da função, o contexto é eliminado e removido da pilha de chamadas, voltando para o contexto anterior na Call Stack ou então para o contexto de execução global.

<!--
::Callout
Saiba mais sobre Execution Context, Call Stack, Local Memory e Thread of Execution em [O que é Thread of Execution?](/glossary/thread-of-execution)
::
-->

Ao declarar uma função dentro de outra função e então retorna-la, o Javascript adiciona, junto a declaração da função em si, os estados da função pai neste contexto de execução.

Por exemplo:

```js
function parent () {
	const state1 = 2
	const state2 = 3

	function child () {
		console.log(a, b)
	}

	return child
}
```

No código acima, a função child em sua declaração recebe um “pacote”, através de uma propriedade escondida do Javascript chamada `[[scope]]`, com as informações de estados do escopo do pai (state1 e state2) que vai acompanha-la para qualquer lugar que ela for.

Este escopo que é passado de pai para filho é conhecido como Lexical Scope (”Escopo Lexico” em português) ou Static Scope (”Escopo Estático”). Estes nomes vêm pelo fato de que o escopo recebido vem do contexto de execução em que a função foi declarada, não vem de onde ela é executada, senão seria chamado de Escopo Dinâmico.

Este “pacote” é informalmente chamado de Closure pelas pessoas que trabalham com desenvolvimento de software, porém este termo é ambiguo, uma vez que o mesmo nome é utilizado para o nome das informações passadas da função pai para a função filho e para o nome deste padrão de desenvolvimento.

Local Memory é chamada por alguns autores como Variable Enviroment, por conta disso alguns autores como o escritor Angus Croll se referencia a estas informações passadas de um escopo a outro como Closed Over Variable Enviroment, ou C.O.V.E para simplificar.

O instrutor e CEO Will Sentance vai um pouco além. Por se tratar de um conjunto de dados que se persiste na aplicação, é referênciada pela propriedade scope lexicalmente a partir de onde a função é declarada, ele chama de P.L.S.R.D (**P**ersistent **L**exical **S**cope **R**eferenced **D**ata).

É possivel pensar em alguns problemas que podem acontecer com esta abordagem de passar todas as informações de estado do pai para o filho, independente de se ela é usada ou não, um deles é o Memory Leak, onde espaço em memória é alocado para uma informação e ela não é utilizada, ou seja, ela fica alocada na memória do computador sem necessidade.

Alguns interpretadores de Javascript já lidam com este problema, como o V8 do Google Chrome, porém é sempre bom ficar ciente deste problema.
