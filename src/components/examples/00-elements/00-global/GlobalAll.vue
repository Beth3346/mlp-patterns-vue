<template>
  <div>
    <color-palette-example />
    <fonts-example />
  </div>
</template>

<script>
import ColorPaletteExample from '@/components/examples/00-elements/00-global/ColorPaletteExample';
import FontsExample from '@/components/examples/00-elements/00-global/FontsExample';

export default {
  name: 'GlobalAll',
  components: {
    ColorPaletteExample,
    FontsExample
  }
};
</script>

