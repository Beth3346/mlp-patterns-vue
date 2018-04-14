<template>
  <div class="elements">
    <h1 class="heading-main">Compounds</h1>
    <ul class="elr-inline-list">
      <li><a href="#color-palette">Color Palette</a></li>
    </ul>
    <pattern-container patternName="Color Palette">
      <p slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloribus, saepe! Odit veniam accusantium facere nemo. At qui blanditiis obcaecati delectus quas debitis, ducimus voluptatibus!</p>
      <color-palette slot="pattern"></color-palette>
      <p slot="usage">Colors are a global pattern.</p>
    </pattern-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { headings } from '@/data/data.json';

import PatternContainer from '@/components/layout/PatternContainer';
import ColorPalette from '@/components/patterns/00-elements/00-global/ColorPalette';

export default {
  name: 'Compounds',
  data() {
    return {};
  },
  components: {
    PatternContainer,
    ColorPalette
  }
};
</script>

<style>
.heading-main {
  font-size: 36px;
  font-weight: 900;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
</style>
