<template>
  <span class="pony-stat-label">{{label}}:</span>
</template>

<script>
export default {
  name: 'StatLabel',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>
