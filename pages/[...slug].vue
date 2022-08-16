<template>
  <div class="content-doc">
    <ContentDoc />
  </div>
</template>

<style lang="scss">
.content-doc {
  font-size: 18px;

  @media (max-width: 849px) {   
    font-size: 16px;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 500;
    margin-bottom: 24px;
    position: relative;

    @media (max-width: 849px) {   
      font-size: 2em;
    }
  }

  h2 {
    font-size: 2em;
    font-weight: 500;
    margin: 40px 0 16px 0;

    a {
      color: var(--contrast-color);
    }

    @media (max-width: 849px) {   
      font-size: 1.5em;
    }
  }

  h3 {
    font-size: 1.5em;
    font-weight: 500;

    @media (max-width: 849px) {   
      font-size: 1.2em;
    }
  }

  h1, h2, h3, h4, h5 {
    svg {
      font-size: 32px;
      margin-right: 16px;
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