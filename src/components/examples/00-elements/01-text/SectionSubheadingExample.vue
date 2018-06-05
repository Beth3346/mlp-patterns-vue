<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Section Subheading</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <SectionSubheading :heading="headings.medium" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import SectionSubheading from '@/components/patterns/00-elements/01-text/SectionSubheading';
import { headings } from '@/data/data.json';

export default {
  name: 'SectionSubheadingExample',
  data() {
    return {
      headings
    };
  },
  components: {
    SectionSubheading
  }
};
</script>
