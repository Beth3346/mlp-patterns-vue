<template>
  <div>
    <h2>Color Palette</h2>
    <ul class="color-palette">
      <li v-for="color in colors">
        <palette :name="color.name" :hex="color.hex"></palette>
      </li>
    </ul>
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

<style>
  .color-palette {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .color-palette li {
    max-width: 25%;
    min-width: 150px;
    padding: 10px;
  }
</style>
