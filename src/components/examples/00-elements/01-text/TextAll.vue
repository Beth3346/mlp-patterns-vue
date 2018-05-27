<template>
  <div>
    <headings />
    <inline-elements />
    <list-items />
    <paragraphs />
    <section-header />
    <section-heading />
    <section-heading-large />
    <section-subheading />
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

