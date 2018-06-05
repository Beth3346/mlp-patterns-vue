<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">List Item</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <ListItem :item="ponies[0]" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/patterns/00-elements/01-text/ListItem';
import { ponies } from '@/data/data.json';

export default {
  name: 'ListItemExample',
  data() {
    return {
      ponies
    };
  },
  components: {
    ListItem
  }
};
</script>
