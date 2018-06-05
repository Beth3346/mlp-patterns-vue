<template>
  <h1 class="section-heading">{{heading}}</h1>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>
