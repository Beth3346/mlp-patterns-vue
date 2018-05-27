<template>
  <div>
    <inline-link />
    <link-element />
    <menu-item />
    <pagination />
    <tab-navigation />
  </div>
</template>

<script>
import InlineLink from '@/components/patterns/00-elements/02-navigation/InlineLink';
import LinkElement from '@/components/patterns/00-elements/02-navigation/LinkElement';
import MenuItem from '@/components/patterns/00-elements/02-navigation/MenuItem';
import Pagination from '@/components/patterns/00-elements/02-navigation/Pagination';
import TabNavigation from '@/components/patterns/00-elements/02-navigation/TabNavigation';

export default {
  name: 'NavigationAll',
  components: {
    InlineLink,
    LinkElement,
    MenuItem,
    Pagination,
    TabNavigation
  }
};
</script>
