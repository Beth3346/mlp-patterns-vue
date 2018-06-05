<template>
  <h2 class="section-subheading">{{heading}}</h2>
</template>

<script>
export default {
  name: 'SectionSubheading',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>
