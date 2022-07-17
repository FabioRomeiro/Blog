<template>
  <div class="content-doc">
    <ContentDoc />
  </div>
</template>

<style lang="scss">
.content-doc {
  font-size: 18px;

  h1 {
    font-size: 2.5em;
    font-weight: 500;
    margin-bottom: 24px;
    position: relative;
  }

  h2 {
    font-size: 2em;
    font-weight: 500;
    margin: 40px 0 16px 0;

    a {
      color: var(--contrast-color);
    }
  }

  p {
    margin-bottom: 16px;
    line-height: 1.8em;
  }

  a {
    text-decoration: none;
    color: var(--highlight-color);
  }

  blockquote {
    border-left: solid 4px var(--contrast-color);
    padding-left: 16px;
    font-style: italic;
  }
}
</style>