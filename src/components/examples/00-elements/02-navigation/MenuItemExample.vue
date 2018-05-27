<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Menu Item</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <menu-item />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/patterns/00-elements/02-navigation/MenuItem';

export default {
  name: 'MenuItemExample',
  components: {
    MenuItem
  }
};
</script>
