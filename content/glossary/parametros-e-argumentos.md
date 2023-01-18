---
title: O que são parâmetros e argumentos em computação?
subject: Parâmetros e argumentos em computação
isPluralSubject: true
description: Clique para saber mais sobre Parâmetros e argumentos, aproveite também para explorar mais conteúdos sobre Computação e Javascript.
publicationDate: 18/01/2023
tags:
  - Computação
  - Javascript
---

Muitas vezes estes dois são tratados como sendo a mesma coisa, mas não são.

**Parâmetro** é o nome dado para uma variavel responsável por referenciar a entrada (input) de uma função. Por exemplo:

```js
function sumOne (number) {
	return number + 1
}
```

No exemplo acima, `number` é um parâmetro da função `sumOne`.

**Argumento** é o valor associado ao parâmetro no momento da execução da função. Por exemplo:

```js
sumOne(4)
```

No exemplo acima o número `4` é o argumento passado para a função `sumOne`.
