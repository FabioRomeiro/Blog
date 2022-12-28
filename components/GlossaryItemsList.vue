<script setup>
const { limit } = defineProps({
  limit: Number
})

const glossaryItems = await queryContent('glossary')
  .only(['title', 'publicationDate', 'tags', 'subject', 'isPluralSubject','_path'])
  .where({ _path: { $ne: '/glossary' } })
  .sort({ publicationDate: 1 })
  .limit(limit)
  .find()

function getPreposition (isPluralSubject) {
  return isPluralSubject ? 'são' : 'é'
}
</script>

<template>
  <section v-once class="glossary-items-list">
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
    column-count: 4;
  }

  &__item {
    line-height: 2em;

    a {
      *:not(strong) {
        color: var(--contrast-color);
        opacity: .6;
      }

      strong {
        margin: 0 .5ch;
      }
    }
  }
}
</style>
