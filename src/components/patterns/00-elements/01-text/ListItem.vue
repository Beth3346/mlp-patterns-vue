<template>
  <li>{{item.name}}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
