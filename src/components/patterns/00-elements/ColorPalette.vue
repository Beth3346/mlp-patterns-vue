<template>
  <div>
    <h2>Color Palette</h2>
    <palette :colors="colors"></palette>
  </div>
</template>

<script>
  import colors from '@/data/colors.json'
  import Palette from '@/components/layout/Palette'

  export default {
    name: 'ColorPalette',
    data () {
      return {
        colors
      }
    },
    components: {
      Palette
    }
  }
</script>
