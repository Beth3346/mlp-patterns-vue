<template>
  <div>
    <color-palette />
    <fonts />
  </div>
</template>

<script>
import ColorPalette from '@/components/patterns/00-elements/00-global/ColorPalette';
import Fonts from '@/components/patterns/00-elements/00-global/Fonts';

export default {
  name: 'GlobalAll',
  components: {
    ColorPalette,
    Fonts
  }
};
</script>

