<template>
  <div>
    <headings-example />
    <inline-elements-example />
    <list-items-example />
    <paragraphs-example />
    <section-header-example />
    <section-heading-example />
    <section-heading-large-example />
    <section-subheading-example />
  </div>
</template>

<script>
import HeadingsExample from '@/components/examples/00-elements/01-text/HeadingsExample';
import InlineElementsExample from '@/components/examples/00-elements/01-text/InlineElementsExample';
import ListItemsExample from '@/components/examples/00-elements/01-text/ListItemsExample';
import ParagraphsExample from '@/components/examples/00-elements/01-text/ParagraphsExample';
import SectionHeaderExample from '@/components/examples/00-elements/01-text/SectionHeaderExample';
import SectionHeadingExample from '@/components/examples/00-elements/01-text/SectionHeadingExample';
import SectionHeadingLargeExample from '@/components/examples/00-elements/01-text/SectionHeadingLargeExample';
import SectionSubheadingExample from '@/components/examples/00-elements/01-text/SectionSubheadingExample';

export default {
  name: 'TextAll',
  components: {
    HeadingsExample,
    InlineElementsExample,
    ListItemsExample,
    ParagraphsExample,
    SectionHeaderExample,
    SectionHeadingExample,
    SectionHeadingLargeExample,
    SectionSubheadingExample
  }
};
</script>

