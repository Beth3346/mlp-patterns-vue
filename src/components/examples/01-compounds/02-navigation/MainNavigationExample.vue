<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Main Navigation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <main-navigation />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/patterns/01-compounds/02-navigation/MainNavigation';

export default {
  name: 'MainNavigationExample',
  components: {
    MainNavigation
  }
};
</script>
