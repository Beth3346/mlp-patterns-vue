<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Section Heading Large</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <section-heading-large />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import SectionHeadingLarge from '@/components/patterns/00-elements/01-text/SectionHeadingLarge';

export default {
  name: 'SectionHeadingLargeExample',
  components: {
    SectionHeadingLarge
  }
};
</script>
