<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Pagination Navigation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <pagination-navigation />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import PaginationNavigation from '@/components/patterns/01-compounds/02-navigation/PaginationNavigation';

export default {
  name: 'PaginationNavigationExample',
  components: {
    PaginationNavigation
  }
};
</script>
