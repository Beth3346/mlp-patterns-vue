<template>
  <div class="pattern-container">
    <div class="pattern-header" :id="slug">
      <h2 class="pattern-heading">{{patternName}}</h2>
      <slot name="description"></slot>
    </div>
    <slot name="pattern"></slot>
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <slot name="usage">Add usage here</slot>
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
    slug() {
      return this.$options.filters.slugify(this.patternName);
    }
  }
};
</script>
