<template>
  <h2 class="section-header">{{heading}}</h2>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>
