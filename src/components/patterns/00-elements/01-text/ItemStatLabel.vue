<template>
  <span class="item-stat-label">{{label}}:</span>
</template>

<script>
export default {
  name: 'ItemStatLabel',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>
