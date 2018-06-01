<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Pagination Navigation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <PaginationNavigation :pagination="pagination" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import PaginationNavigation from '@/components/patterns/01-compounds/02-navigation/PaginationNavigation';
import { pagination } from '@/data/data.json';

export default {
  name: 'PaginationNavigationExample',
  data() {
    return {
      pagination
    };
  },
  components: {
    PaginationNavigation
  }
};
</script>
