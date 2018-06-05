<template>
  <span class="status-label">{{status}}</span>
</template>

<script>
export default {
  name: 'StatusLabel',
  props: {
    status: {
      type: String,
      required: true
    }
  }
};
</script>
