<template>
  <div>
    <div class="pattern"><headings /></div>
    <div class="pattern"><inline-elements /></div>
    <div class="pattern"><list-items /></div>
    <div class="pattern"><paragraphs /></div>
    <div class="pattern"><section-header /></div>
    <div class="pattern"><section-heading /></div>
    <div class="pattern"><section-heading-large /></div>
    <div class="pattern"><section-subheading /></div>
  </div>
</template>

<script>
import Headings from '@/components/patterns/00-elements/01-text/Headings';
import InlineElements from '@/components/patterns/00-elements/01-text/InlineElements';
import ListItems from '@/components/patterns/00-elements/01-text/ListItems';
import Paragraphs from '@/components/patterns/00-elements/01-text/Paragraphs';
import SectionHeader from '@/components/patterns/00-elements/01-text/SectionHeader';
import SectionHeading from '@/components/patterns/00-elements/01-text/SectionHeading';
import SectionHeadingLarge from '@/components/patterns/00-elements/01-text/SectionHeadingLarge';
import SectionSubheading from '@/components/patterns/00-elements/01-text/SectionSubheading';

export default {
  name: 'TextAll',
  components: {
    Headings,
    InlineElements,
    ListItems,
    Paragraphs,
    SectionHeader,
    SectionHeading,
    SectionHeadingLarge,
    SectionSubheading
  }
};
</script>

