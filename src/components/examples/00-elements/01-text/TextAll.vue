<template>
  <div>
    <div class="pattern"><headings /></div>
    <div class="pattern"><list-heading /></div>
    <div class="pattern"><inline-elements /></div>
    <div class="pattern"><list-item /></div>
    <div class="pattern"><paragraphs /></div>
    <div class="pattern"><section-header /></div>
    <div class="pattern"><section-heading /></div>
    <div class="pattern"><section-heading-large /></div>
    <div class="pattern"><section-subheading /></div>
    <div class="pattern"><status-label /></div>
    <div class="pattern"><stat-label /></div>
    <div class="pattern"><item-stat-label /></div>
  </div>
</template>

<script>
import Headings from '@/components/patterns/00-elements/01-text/Headings';
import InlineElements from '@/components/patterns/00-elements/01-text/InlineElements';
import ListItem from '@/components/patterns/00-elements/01-text/ListItem';
import Paragraphs from '@/components/patterns/00-elements/01-text/Paragraphs';
import ListHeading from '@/components/patterns/00-elements/01-text/ListHeading';
import SectionHeader from '@/components/patterns/00-elements/01-text/SectionHeader';
import SectionHeading from '@/components/patterns/00-elements/01-text/SectionHeading';
import SectionHeadingLarge from '@/components/patterns/00-elements/01-text/SectionHeadingLarge';
import SectionSubheading from '@/components/patterns/00-elements/01-text/SectionSubheading';
import StatusLabel from '@/components/patterns/00-elements/01-text/StatusLabel';
import StatLabel from '@/components/patterns/00-elements/01-text/StatLabel';
import ItemStatLabel from '@/components/patterns/00-elements/01-text/ItemStatLabel';

export default {
  name: 'TextAll',
  components: {
    Headings,
    InlineElements,
    ListItem,
    Paragraphs,
    SectionHeader,
    SectionHeading,
    SectionHeadingLarge,
    SectionSubheading,
    ListHeading,
    StatusLabel,
    StatLabel,
    ItemStatLabel
  }
};
</script>

