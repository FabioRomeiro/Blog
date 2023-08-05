<script setup>
import { sortQueryResultsByDate } from '~/helpers/contentList'

const props = defineProps({
  limit: {
    type: Number,
    default: null
  },
  searchable: {
    type: Boolean,
    default: false
  }
})

const searchText = ref('')

const formattedSearchText = computed(() => searchText.value.toLowerCase())

const allGlossaryItems = await queryContent('glossary')
  .only(['title', 'publicationDate', 'tags', 'subject', 'isPluralSubject','_path'])
  .where({ _path: { $ne: '/glossary' } })
  .find()

const glossaryItems = computed(() => {  
  const items = sortQueryResultsByDate(allGlossaryItems, 'publicationDate').filter(item => {
    const itemTexts = (item.title + item._path).toLowerCase()
    return !props.searchable || itemTexts.includes(formattedSearchText.value)
  })

  if (props.limit !== null) {
    return items.slice(0, props.limit)
  }

  return items
})

function getPreposition (isPluralSubject) {
  return isPluralSubject ? 'são' : 'é'
}
</script>

<template>
  <section class="glossary-items-list">
    <div
      v-if="searchable"
      class="glossary-items-list__search"
    >
      <label for="glossary-search-field">
        Procure por um assunto
      </label>
      <input
        v-model="searchText"
        id="glossary-search-field"
        placeholder="Ex: closure"
      >
    </div>

    <ol class="glossary-items-list__list">
      <li
        v-for="item in glossaryItems"
        :key="item.title"
        class="glossary-items-list__item"
      >
        <NuxtLink :to="item._path">
          <span>O que {{ getPreposition(item.isPluralSubject) }}</span>
          <strong>{{ item.subject }}</strong>
          <span>?</span>
        </NuxtLink>
      </li>
    </ol>
    <NuxtLink
      v-if="limit && glossaryItems && glossaryItems.length >= limit"
      to="/glossary"
      class="glossary-items-list__link"
    >
      <span>Ver todo o glossário</span>
      <Chevron />
    </NuxtLink>
  </section>
</template>

<style lang="scss">
.glossary-items-list {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__list {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__item {
    line-height: 2em;
    
    a {
      padding: 8px;
      border-radius: 3px;
      background-color: var(--contrast-color-lighter);

      *:not(strong) {
        color: var(--contrast-color);
        opacity: .6;
      }

      strong {
        margin: 0 .5ch;
      }
    }
  }

  &__search {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      border-radius: 8px;
      padding: 8px;
      font-family: var(--font-family);
      font-size: 16px;
    }
  }
}
</style>
