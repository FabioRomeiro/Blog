<script setup>
definePageMeta({
  layout: 'extended',
});

const bookPerShelf = 15

const gameContainerElement = ref(null)

const query = ref('')

const currentBookShelf = ref(0)
const bookShelves = ref(Array(10).fill().map((_, i) => ({
  id: `book-shelf-${i}`,
  shelves: Array(6).fill().map((_, j) => ({
    id: `shelf-${j}`,
    books: createBooks(bookPerShelf)
  }))
})))

const counterSize = 500
const counterSizeStyle = `${counterSize}px`

const bookShelfBorderSize = 4
const bookShelfBorderSizeStyle = `${bookShelfBorderSize}px`

const bookWidth = 10
const bookWidthStyle = `${bookWidth}px`

const bookGap = 2
const bookGapStyle = `${bookGap}px`

const scaleMultiplier = 1.2
const scaleMultiplierStyle = `scale(${scaleMultiplier})`

const bookShelfWidth = bookPerShelf * (bookWidth + bookGap) - bookGap + bookShelfBorderSize * 2 * 2

const bookShelfGap = 32
const bookShelfGapStyle = `${bookShelfGap}px`

const libraryWidth = computed(() => (gameContainerElement.value?.clientWidth - counterSize) || 860)
const libraryWidthStyle = computed(() => `${libraryWidth.value}px`)

const dislocationSize = bookShelfWidth + bookShelfGap
const scrollerPositionStyle = computed(() => {
  const initialPosition = (libraryWidth.value / 2) - (bookShelfWidth / 2) - bookShelfGap
  const position = initialPosition - (dislocationSize * currentBookShelf.value)
  return `translateX(${position}px)`
})

function createBooks(amount) {
  return Array(amount).fill().map((_, i) => {
    const book = {
      id: `book-${i}`,
    }

    if (i % 2 === 0) {
      book.size = 'big'
    }

    return book
  })
}
</script>

<template>
  <div>
    <div
      class="game"
      ref="gameContainerElement"
    >
      <div class="counter"></div>
      <div class="library">
        <div
          class="scroller"
        >
          <div
            v-for="(bookShelf, index) in bookShelves"
            :key="bookShelf.id"
            class="book-shelf"
            :class="{ 'book-shelf--focused': currentBookShelf === index }"
          >
            <div
              v-for="shelf in bookShelf.shelves"
              :key="shelf.id"
              class="shelf"
            >
              <div
                v-for="book in shelf.books"
                :key="book.id"
                class="book"
              ></div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="navigation-button navigation-button--left"
          aria-label="Previous"
          @click="currentBookShelf -= 1"
        ></button>
        <button
          type="button"
          class="navigation-button navigation-button--right"
          aria-label="Next"
          @click="currentBookShelf += 1"
        ></button>
      </div>
    </div>

    <input
      v-model="query"
      type="text"
      class="query-input"
    >
  </div>
</template>

<style lang="scss" scoped>
.game {
  display: flex;
  overflow: hidden;
}

.counter {
  width: v-bind('counterSizeStyle');
  height: v-bind('counterSizeStyle');
  background-color: rgb(77, 16, 16);
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 50%);
  z-index: 1;
  border-right: solid 4px #1c1c1c;
}

.library {
  width: v-bind('libraryWidthStyle');
  overflow: hidden;
  display: flex;
  background-color: #5e3c1e;
  position: relative;
}

.scroller {
  display: flex;
  align-items: center;
  gap: v-bind('bookShelfGapStyle');
  position: relative;
  transform: v-bind('scrollerPositionStyle');
  transition: transform ease-in-out .3s;
}

.book {
  width: v-bind('bookWidthStyle');
  height: 40px;
  background-color: #cf1414;

  &:nth-child(2n) {
    height: 50px;
  }

  &.red {
    background-color: #cf1414;
  }

  &.blue {
    background-color: #1456cf;
  }

  &.selected {
    background-color: #e4d618;
  }
}


.book-shelf {
  border: solid v-bind('bookShelfBorderSizeStyle') #583603;
  margin: 0;
  transition: transform ease-in-out .3s, margin ease-in-out .3s;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
    top: 0;
    opacity: 1;
  }

  &--focused {
    transform: v-bind('scaleMultiplierStyle');
    margin: 0 v-bind('bookShelfGapStyle');

    &::after {
      display: none;
    }
  }
}

.shelf {
  display: flex;
  gap: v-bind('bookGapStyle');
  align-items: flex-end;
  border: v-bind('bookShelfBorderSizeStyle') solid #6b4205;
  background-color: #6d4407;
  height: 50px;
}

.navigation-button {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 40px;
  border: none;
  top: calc(50% - 20px);
  cursor: pointer;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-bottom: solid 3px white;
    border-right: solid 3px white;
    position: absolute;
  }

  &--left {
    left: 40px;

    &::after {
      transform: rotateZ(135deg) translateY(10px);
    }
  }

  &--right {
    right: 40px;

    &::after {
      transform: rotateZ(-45deg) translateY(-10px);
    }
  }
}

.query-input {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 8px;
  color: white;
  background-color: rgb(66, 22, 11);
  border: none;
  font-family: var(--font-family);
  outline: none;
  font-size: 16px;
}
</style>
