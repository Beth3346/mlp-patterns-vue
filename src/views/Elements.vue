<template>
  <div class="elements">
    <h1>Elements</h1>
    <color-palette></color-palette>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorPalette from '@/components/patterns/00-elements/ColorPalette'

export default {
  name: 'home',
  components: {
    ColorPalette
  }
}
</script>
