<template>
  <div class="pattern-container">
    <div class="pattern-header" :id="slug">
      <h2 class="pattern-heading">Color Palette</h2>
      <slot name="description"></slot>
    </div>
    <slot name="pattern"></slot>
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <slot name="usage"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PatternContainer',
    props: {
      patternName: String
    },
    computed: {
      slug () {
        return this.$options.filters.slugify(this.patternName)
      }
    }
  }
</script>

<style>
  .pattern-container {
    border: 1px solid #eee;
    margin: 10px auto;
    padding: 20px;
  }

  .pattern-heading {
    padding: 0 0 10px;
    margin: 0;
    font-size: 24px;
    font-weight: 900;
  }

  .pattern-usage {
    padding: 20px 0 10px;
  }

  .pattern-usage p {
    font-size: 14px;
  }

  .pattern-usage p:last-child {
    padding-bottom: 0;
  }

  .pattern-usage-heading {
    font-size: 18px;
    font-weight: 700;
    padding: 0 0 10px;
    margin: 0;
  }
</style>
