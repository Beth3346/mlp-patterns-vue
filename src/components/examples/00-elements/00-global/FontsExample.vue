<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Fonts</h2>
      <p>MyLittlePonyCollection uses a sans serif font throughout the entire site</p>
      <p>Font weights can vary for headings and important content.</p>
    </div>
    <fonts />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import Fonts from '@/components/patterns/00-elements/00-global/Fonts';

export default {
  name: 'FontsExample',
  components: {
    Fonts
  }
};
</script>
