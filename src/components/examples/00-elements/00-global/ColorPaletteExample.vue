<template>
  <div class="pattern-container">
    <div class="pattern-header" id="color-palette">
      <h2 class="pattern-heading">Color Palette</h2>
      <p slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloribus, saepe! Odit veniam accusantium facere nemo. At qui blanditiis obcaecati delectus quas debitis, ducimus voluptatibus!</p>
    </div>
    <color-palette></color-palette>
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Colors are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import ColorPalette from '@/components/patterns/00-elements/00-global/ColorPalette';

export default {
  name: 'ColorPaletteExample',
  components: {
    ColorPalette
  }
};
</script>
