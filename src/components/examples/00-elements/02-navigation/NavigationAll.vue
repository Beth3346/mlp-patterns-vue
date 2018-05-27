<template>
  <div>
    <div class="pattern"><inline-link /></div>
    <div class="pattern"><link-element /></div>
    <div class="pattern"><menu-item /></div>
    <div class="pattern"><pagination /></div>
    <div class="pattern"><tab-navigation /></div>
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
