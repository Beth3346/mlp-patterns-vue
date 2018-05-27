<template>
  <div>
    <h1>{{headings.short}}</h1>
    <h2>{{headings.short}}</h2>
    <h3>{{headings.short}}</h3>
    <h4>{{headings.short}}</h4>
    <h5>{{headings.short}}</h5>
    <h6>{{headings.short}}</h6>
  </div>
</template>

<script>
import { headings } from '@/data/data.json';

export default {
  name: 'Headings',
  data() {
    return {
      headings
    };
  }
};
</script>
