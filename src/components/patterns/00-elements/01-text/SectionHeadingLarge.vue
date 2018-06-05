<template>
  <h1 class="section-heading-large">{{heading}}</h1>
</template>

<script>
export default {
  name: 'SectionHeadingLarge',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>
