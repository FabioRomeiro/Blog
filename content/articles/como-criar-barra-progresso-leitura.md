---
title: Como criar uma barra de progresso de leitura?
description: Em livros temos a sensação de progresso com o passar dos capitulos enquanto em sites é padronizado a barra de progresso em cima da tela. Neste artigo vamos entender como implementa-la em seu site.
publicationDate: 14/01/2022
tags:
  - Front-end
  - HTML
  - CSS
---

## Posicionando a barra

A estrutura HTML da barra de leitura será apenas um div com uma classe e um atributo para ser usado como referência na busca pelo Javascript (este atributo é opcional, você pode buscar pela classe em si se preferir):

```html
<div
	data-reading-progress-bar
	class="reading-progress-bar"
>
</div>
```

Para localiza-la fixamente no canto superior da tela aplicaremos o seguinte estilo:

```css
.reading-progress-bar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
```

Agora precisamos definir uma altura para a barra e uma cor. Como altura escolhi `5px` e como cor escolhi o padrão azul do CSS, `blue`:

```css
.reading-progress-bar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
	height: 5px;
  background-color: blue;
}
```

## Fazendo a barra funcionar

Com a barra criada, precisamos agora criar a lógica que modificará a sua largura de acordo com o progresso de leitura.

O progresso será calculado ao rolar a página, por conta disso usaremos o evento scroll do Javascript:

```jsx
function updateProgressBar () {
}

document.addEventListener('scroll', updateProgressBar)
```

É sempre bom se lembrar de remover o Event Listener quando ele não é mais necessário, caso contrário ele continuará ativo quando sair.

Vamos já remove-lo ao sair da página:

```jsx
function updateProgressBar () {
}

document.addEventListener('scroll', updateProgressBar)

window.onunload = () => {
	document.removeEventListener('scroll', updateProgressBar)
}
```

Como planejamos, para calcular o progresso precisamos, em pixels, do quanto o usuário já rolou verticalmente e o tamanho total da página.

A informação do quanto o usuário já rolou pode ser encontrada na propriedade `scrollTop` de `document.body`.

Em relação ao tamanho total da tela rolável precisamos subtrair duas propriedades: `scrollHeight` e `clientHeight`.

::Callout
Para saber mais sobre `scrollHeight` leia [este artigo do MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight).
::

::Callout
Para saber mais sobre `clientHeight` leia [este artigo do MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight).
::

Com essas duas informações podemos dividir o quanto o usuário já rolou pelo tamanho total da tela para obtermos um número entre 0 e 1:

```jsx
function updateProgressBar () {
	const { scrollHeight, clientHeight, scrollTop } = document.body
  const pageHeight = scrollHeight - clientHeight
	const progress = scrollTop / pageHeight
}

document.addEventListener('scroll', updateProgressBar)

window.onunload = () => {
	document.removeEventListener('scroll', updateProgressBar)
}
```

O calculo está funcionando, porém o estilo CSS esperará um valor em porcentagem, para isso podemos multiplicar o resultado da divisão por 100 e arredondar o produto para cima utilizando `Math.ceil`:

```jsx
function updateProgressBar () {
	const { scrollHeight, clientHeight, scrollTop } = document.body
  const pageHeight = scrollHeight - clientHeight
	const progress = Math.ceil((scrollTop / pageHeight) * 100)
}

document.addEventListener('scroll', updateProgressBar)

window.onunload = () => {
	document.removeEventListener('scroll', updateProgressBar)
}
```

Por fim, precisamos alterar o estilo da barra para que o progresso fique visivel ao usuário.

Para isso vamos buscar o elemento pelo Javascript e na função `updateProgressBar` alterar a propriedade `width` do estilo:

```jsx
const barElement = document.querySelector('[data-reading-progress-bar]')

function updateProgressBar () {
	const { scrollHeight, clientHeight, scrollTop } = document.body
    const pageHeight = scrollHeight - clientHeight
	const progress = Math.ceil((scrollTop / pageHeight) * 100)
	barElement.style.width = `${progress}%`
}

document.addEventListener('scroll', updateProgressBar)

window.onunload = () => {
	document.removeEventListener('scroll', updateProgressBar)
}
```

Agora nossa barra está completamente funcional e acompanhando a rolagem da página.

## Conclusão

Esta funcionalidade é bem simples de ser feita e implementada. Você pode fazer variações e melhorias como preferir, por exemplo utilizar custom-properties ou então animar a transição de largura da barra. Por não ser complexa é facil de implementar em um framework js como sendo um componente.

Segue o código completo feito inline em html:

::FileSnippet{fileName=index.html}
```html
<html>
	<body>
		<div
			data-reading-progress-bar
			class="reading-progress-bar"
		><div>

		<script>
			const barElement = document.querySelector('[data-reading-progress-bar]')
			
			function updateProgressBar () {
				const { scrollHeight, clientHeight, scrollTop } = document.body
			    const pageHeight = scrollHeight - clientHeight
				const progress = Math.ceil((scrollTop / pageHeight) * 100)
				barElement.style.width = `${progress}%`
			}
			
			document.addEventListener('scroll', updateProgressBar)
			
			window.onunload = () => {
				document.removeEventListener('scroll', updateProgressBar)
			}
		</script>

		<style>
			.reading-progress-bar {
			  position: fixed;
			  left: 0;
			  top: 0;
			  z-index: 1;
				height: 5px;
			  background-color: blue;
			}

			body {
				height: 200vh;
			}
		</style>
	</body>
</html>
```
::
