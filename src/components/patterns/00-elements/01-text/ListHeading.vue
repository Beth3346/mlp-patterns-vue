<template>
  <h3 class="card-details-title">{{heading}}:</h3>
</template>

<script>
export default {
  name: 'ListHeading',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>
