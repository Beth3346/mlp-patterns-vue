<template>
  <li>{{ponies[0].name}}</li>
</template>

<script>
import { ponies } from '@/data/data.json';
export default {
  name: 'ListItem',
  data() {
    return {
      ponies
    };
  }
};
</script>

<style scoped>
.pattern-heading {
  padding-top: 20px;
  font-size: 18px;
}
</style>
