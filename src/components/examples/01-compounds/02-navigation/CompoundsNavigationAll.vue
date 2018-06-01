<template>
  <div>
    <div class="pattern"><FooterNavigation :listitems="listitems" /></div>
    <div class="pattern"><MainNavigation :listitems="listitems" /></div>
    <div class="pattern"><PaginationNavigation :pagination="pagination" /></div>
    <div class="pattern"><TabNavigation /></div>
  </div>
</template>

<script>
import FooterNavigation from '@/components/patterns/01-compounds/02-navigation/FooterNavigation';
import MainNavigation from '@/components/patterns/01-compounds/02-navigation/MainNavigation';
import PaginationNavigation from '@/components/patterns/01-compounds/02-navigation/PaginationNavigation';
import TabNavigation from '@/components/patterns/01-compounds/02-navigation/TabNavigation';
import { pagination, listitems } from '@/data/data.json';

export default {
  name: 'CompoundsNavigationAll',
  data() {
    return {
      pagination,
      listitems
    };
  },
  components: {
    FooterNavigation,
    MainNavigation,
    PaginationNavigation,
    TabNavigation
  }
};
</script>

