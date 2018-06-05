<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Section Heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <SectionHeading :heading="headings.medium" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import SectionHeading from '@/components/patterns/00-elements/01-text/SectionHeading';
import { headings } from '@/data/data.json';

export default {
  name: 'SectionHeadingExample',
  data() {
    return {
      headings
    };
  },
  components: {
    SectionHeading
  }
};
</script>
