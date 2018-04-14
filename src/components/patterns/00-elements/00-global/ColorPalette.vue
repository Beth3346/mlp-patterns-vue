<template>
  <div>
    <palette :colors="colors"></palette>
  </div>
</template>

<script>
import { colors } from '@/data/data.json'
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
