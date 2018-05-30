<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Secondary Navigation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <secondary-navigation />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import SecondaryNavigation from '@/components/patterns/01-compounds/02-navigation/SecondaryNavigation';

export default {
  name: 'SecondaryNavigationExample',
  components: {
    SecondaryNavigation
  }
};
</script>
