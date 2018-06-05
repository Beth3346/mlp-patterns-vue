<template>
  <div>
    <div class="pattern">
      <headings />
    </div>
    <div class="pattern">
      <inline-elements />
    </div>
    <div class="pattern">
      <ListItem :item="ponies[0]" />
    </div>
    <div class="pattern">
      <paragraphs />
    </div>
    <div class="pattern">
      <SectionHeader :heading="headings.medium" />
    </div>
    <div class="pattern">
      <SectionHeading :heading="headings.medium" />
    </div>
    <div class="pattern">
      <SectionHeadingLarge :heading="headings.medium" />
    </div>
    <div class="pattern">
      <SectionSubheading :heading="headings.medium" />
    </div>
    <div class="pattern">
      <StatusLabel :status="status.name" />
    </div>
    <div class="pattern">
      <ListHeading :heading="heading" />
    </div>
    <div class="pattern">
      <StatLabel :label="label.label" />
    </div>
    <div class="pattern">
      <ItemStatLabel :label="label.label" />
    </div>
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
import { statLabels, status, ponies, headings } from '@/data/data.json';

export default {
  name: 'TextAll',
  data() {
    return {
      headings,
      ponies,
      heading: 'Ponies',
      label: statLabels[0],
      status: status[0]
    };
  },
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

