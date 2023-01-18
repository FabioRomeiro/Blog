---
title: 20 seletores CSS com exemplos
description: Os seletores CSS servem para possibilitar e facilitar não apenas a estilização de um site, mas também na manipulação pelo DOM, neste artigo vamos passar pelos principais e dar exemplos de casos da vida real que eles poderiam ser utilizados.
publicationDate: 18/01/2023
tags:
  - Front-end
  - CSS
---

## 1) Tag (`div`)

Começando pelo mais básico e um dos seletores mais fundamenteis, o de tag.

No HTML nós utilizamos as tags para estruturar nosso código, exemplos da tag são: `div`, `a`, `script`, `p`, `section`, etc. Cada tag tem sua função e seu próprio caso de uso, mas independente de como serão utilizadas, todas são tags.

A utilização deste seletor no CSS funciona da seguinte maneira

```css
div {
	color: red;
}
```

O estilo acima define que TODAS as tags `div` na página em que esse estilo for carregado terá o conteúdo textual pintado na cor vermelha.

Um caso de uso comum deste seletor é em estilização de links.

Imagine que sua empresa possui a cor rosa como cor principal e deseja que todos os links do site estejam em negrito e com a cor rosa. Sabemos que links são obrigatoriamente representados pela tag `a`, então podemos estilizar todos os link desta maneira:

```css
a {
	color: pink;
	font-weight: 500;
}
```

## 2) Classe (`.example`)

Estilizar pela Tag significa aplicar para todos os elementos do HTML que possuem esta tag, porém as vezes queremos um estilo específico para um elemento.

Para estilizar apenas este elemento nós associamos uma classe a ele, esta classe pode ter qualquer nome que definir, por exemplo `container`, e pelo CSS o estilizamos adicionando um `.` antes do nome da classe, desta maneira:

```css
.container {
	width: 90%;
}
```

Com isso todos os elementos que possuirem a classe `container` receberão o estilo definido.

É muito comum em aplicações isso ser aplicado para botões. Imagine que sua empresa precisa de um botão vermelho que represente perigo, você não pode colorir todos os botões através do seletor de tag pois nem todos os botões representam perigo, você cria uma classe como essa:

```css
.btn-danger {
	background-color: red;
	color: white;
}
```

## 3) Id (`#example`)

O conceito do seletor de id é semelhante ao de classe, porém enquanto uma classe pode ser reutilizada em mais de um elemento o id não pode se repetir no HTML, eles devem ser únicos para todo elemento que possuir um id.

Para estilizar por id é necessário adicionar o prefixo `#`

```css
#modal {
	padding: 16px;
}
```

Dado que ids são únicos, é normal estilizar elementos que são exibidos apenas uma vez na página, como o rodapé de um site

```css
#footer {
	background-color: gray;
}
```

## 4) Atributo (`[data-example]`)

Atributos é qualquer indicador dentro da declaração das tags, por exemplo, ao definirmos um `input` nos podemos definir um atributo `type` que possui valores descrevendo o conteúdo do `input` como `text`, `number`, `password`, etc.

Assim como classes é possível estilizar qualquer elemento contendo um atributo específico. É muito comum querer destacar campos de um formulário que são obrigatórios, ou seja, que possuem o atributo `required`:

```css
input[required] {
    background-color: red;
}
```

## 5) Mais de uma seleção (`.example-1, .example-2`)

É possível aplicar o mesmo estilo para várias seleções diferentes, basta adicionar uma virgula entre as seleções, e assim o estilo definido sera aplicado a todos os selecionados.

Por exemplo, imagine que precisa pintar de verde o texto de todas as tags `span` e de todos os elementos que possuem a classe `color-green`:

```css
span, .color-green {
	color: green;
}
```

## 6) Descendente (`.example .deep`)

É facil de se confundir este seletor com o seletor de filho, porém é importante lembrar que o seletor de descendente engloba todos os descendentes, incluindo filho, neto, etc.

Para utiliza-lo apenas selecione o container pai e em seguida a tag/classe/id dos descendentes que serão selecionados

```css
.container h1 {
	margin-bottom: 8px
}
```

No exemplo acima estamos selecionando todas as divs que descendem container, ou seja, que estão inclusas dentro do elemento container.

Imagine que você possui um banner de promoção e você quer que todos os paragrafos (tag `p`) dentro do banner possuam o texto amarelo

```css
.banner p {
	color: yellow
}
```

## 7) Filho (`.example > .example-child`)

Este seletor seleciona apenas elementos que são filhos imediatos da classe pai. Ele é representado pelo sinal `>`.

Por exemplo, imagine que queremos que todos os itens de uma barra de navegação tenha uma margem de 8 pixels, mas os subitens que são filhos desses itens não devem possuir esta margem:

```css
.navigation-bar > .item {
	margin: 8px;
}
```

## 8) Todos (`*`)

Este seletor é muito perigoso pois ele serve como um coringa, ao utiliza-lo você está selecionando todo e qualquer elemento. O caracter que o representa é `*`.

Um exemplo de uso para este seletor é o cenário em que a sua página precisa possuir um espaçamento padronizado entre todos os elementos filhos da classe `container`. Os filhos de `container` podem ser qualquer tag, poderíamos lista-las no estilo como visto anteriormente mas isso não deixaria nosso estilo escalável, pois toda vez que surgisse um novo filho com uma tag diferente teriamos que lembrar de editar o estilo, para este caso podemos simplificar e aplicar o estilo para qualquer filho imediato de `container`.

```css
.container > * {
	padding: 8px;
}
```

## 9) Irmãos (`.example ~ .example-sibling`)

Assim como é possível selecionar os descendentes e os filhos é possível também selecionar os elementos irmãos, ou seja, selecionar elementos que estao abaixo do mesmo pai de um elemento específico.

Imagine que você tem um formulário que pede uma nota de 10 a 1, ao selecionar uma nota, todas as outras abaixo devem ficar verdes:

```css
input:checked ~ input {
	background-color: green;
}
```

## 10) Irmão imediato (`.example + .example-sibling`)

Este seletor é muito confundido com o anterior, de irmãos, porém este se aplica apenas a elementos que vem imediatamente (no DOM) após um elemento específico.

Este 

Ao estilizar páginas com bastante conteúdo textual, com múltiplos parágrafos, é normal querer definir que os parágrafos possuam um espaço entre eles, porém se um parágrafo estiver sozinho, não tem o porquê colocar um espaço, logo, um parágrafo so deve ter um espaço caso seja irmão de outro:

```css
p + p {
    margin-top: 8px;
}
```

## 11) “E” (`.example.example-2`)

Muitas vezes precisamos que um elemento seja estilizado de certa maneira apenas se houver uma combinacao de fatores, uma espécie de operador lógico “E”. “Se este elemento específico tiver esta classe, estilizar desta maneira”.

Este operador é utilizado frequentemente para aplicar modificadores de classe. Por exemplo imagine uma mensagem de aviso com a classe message, por padrão ela é amigável mas se tiver a classe `danger` deve ser pintado de vermelho para mostrar urgencia:

```css
.message.danger {
    color: red;
}
```

## 12) Negativo (`.example:not(div)`)

Muitas vezes é mais fácil negar uma condição para criar a excesao do que escrever todas as condições validas necessárias, para isso que este operador existe.

Pense na situação em que você quer que todos os usuarios de uma lista que recusasam ou não responderam ao contive (ou seja, todos que nao aceitaram) devem ficar com a opacidade menor, sendo que a situação do convite é definida através de um atributo `invite`.

```css
.user:not([invite=accepted]) {
    opacity: .3;
}
```

## 13) Posição (`.example:nth-child(2n)`)

Este seletor permite criar padrões específicos de estilização baseado na posição de um elemento em uma lista. Ele é muito flexível e pode ser utilizado de várias maneiras, como vamos ver brevemente. Sua utilização é com o seletor :nth que recebe como parâmetro a posição do item que será estilizado.

Um exemplo muito comum de utiliza-lo é em linhas de uma tabela extensa, para facilitar a leitura é intercalar a cor de cada linha com uma tonalidade levemente diferente:

```css
tr:nth-child(2n) {
	background-color: grey;
}
```

O código acima está pintando todos os elementos pares da lista de cinza. Existe outra maneira simplificada de aplicar a mesma solução, com a palavra even (”par” em inglês):

```css
tr:nth-child(even) {
	background-color: grey;
}
```

Outro exemplo de uso que vale ser sitado aqui é caso quisessemos fazer um ranking, onde cada uma das 3 primeiras posições possuem uma cor diferente:

```css
tr:nth-child(1) {
	background-color: yellow;
}

tr:nth-child(2) {
	background-color: green;
}

tr:nth-child(3) {
	background-color: blue;
}
```

## 14) Primeiro elemento (`.example:first-child`)

Muitas vezes é comum querermos estilizar o primeiro item de uma lista de elementos, e para não ter que utilizar o seletor de posição `:nth-child(1)` todas as vezes, podemos utilizar o `:first-child`.

Imagine o caso de uso anterior onde queremos montar um ranking, porém desta vez queremos apenas dar destaque ao primeiro:

```css
tr:first-child {
	background-color: yellow;
}
```

## 15) Último elemento (`.example:last-child`)

Este elemento é exatamente o contrário do `:first-child`, pois este seleciona o último item de uma lista.

Imagine que temos uma série de parágrafos, queremos que toos possuam um espaço entre eles menos o último, podemos criar esta exceção desta maneira:

```css
p:last-child {
	margin-bottom: 0;
}
```

## 16) Desabilitado (`input:disabled`)

Os inputs do HTML possuem vários seletores exclusivos que facilitam na estilização de um formulário, este é um deles. Este seletor seleciona todos os inputs que estão desabilitados.

Normalmente campos desabilitados ficam cinzas ou então possuem uma opacidade menor, para diminuir a opacidade de um campo desabilitado podemos utilizar este seletor desta maneira:

```css
input:disabled {
	opacity: .3;
}
```

## 17) Hover (`.example:hover`)

Este seletor é um dos mais comuns quando se trata de animação ou melhoria da experiência, ele é ativo quando o mouse passa por cima do elemento (dado isso, lembre-se que para uma experiência mobile ele não deve ser priorizado, já que normalmente não existe um mouse).

O uso mais comum do hover é para links, muitas vezes queremos que o link mude de cor quando passamos ou mouse em cima, para fazer isso podemos utiliza-lo desta maneira:

```css
a:hover {
	color: blue
}
```

## 18) Placeholder (`input:placeholder`)

Mais um seletor exclusivo dos inputs, desta vez este é o responsável por estilizar o texto de apoio de um campo, aquele texto que normalmente fica cinza antes que o usuário escreva algo no campo.

O padrão dos navegadores é ter o placeholder cinza, porém em um sistema com seus próprios padrões de design é normal customizar os estilos padrões para que o usuário fique imerso na experiência do seu sistema, uma das alterações a ser feita é definir a cor do placeholder como sendo a cor da sua marca levemente transparente:

```css
input:placeholder {
	color: rgba(255, 0, 224, .4);
}
```

## 19) Assinalado / checked (`input:checked`)

O input de checkbox do HTML é dificil de ser estilizado, porém conseguimos acessar seus estados pelo CSS, por exemplo, este seletor permite você verifcar se o campo foi assinalado.

Imagine que você queira dar destaque ao usuário que um campo de termos de uso foi assinalado, para isso caso assinalado ele deve ficar em negrito:

```css
input:checked {
	font-weight: bold;
}
```

## 20) Focado (`input:focus`)

Podemos controlar o estado dos campos do formulário para quando o usuário está ativamente nele pronto para digitar ou assinalar, ou seja, quando está focado nele.

Em formulários extensos é normal o usuário se perder em seu preenchimento, podemos ajuda-lo dando destaque para o campo que ele se encontra no momento, podemos fazer isso aumentando o tamando da borda do campo:

```css
input:focus {
	border-width: 3px;
}
```

## E tem mais!

Estes foram os 20 seletores que vieram primeiro na minha cabeça pois são os que mais uso no dia-a-dia, porém existem muitos outros que valem ser estudados e entendidos para que possam facilitar sua vida quando for estilizar uma página no futuro.

::Callout
Para conhecer todos os seletores CSS disponívels leia esta seção do site da W3C falando sobre os [seletores do CSS](https://www.w3.org/TR/2018/REC-selectors-3-20181106/#selectors).
::

<!--
::Callout
Para saber como utilizar seletores CSS na busca por elementos no Javascript através do DOM, leia [O que é querySeletor?](/glossary/querySelector)
::

::Callout
Para sobre o que é DOM leia O que é DOM?
::
-->

