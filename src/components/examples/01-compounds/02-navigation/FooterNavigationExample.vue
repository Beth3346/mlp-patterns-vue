<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Footer Navigation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <footer-navigation :listitems="listitems" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import FooterNavigation from '@/components/patterns/01-compounds/02-navigation/FooterNavigation';
import { listitems } from '@/data/data.json';

export default {
  name: 'FooterNavigationExample',
  data() {
    return {
      listitems
    };
  },
  components: {
    FooterNavigation
  }
};
</script>
