<template>
  <ul class="color-palette">
    <li v-for="color in colors">
      <palette-item :name="color.name" :hex="color.hex"></palette-item>
    </li>
  </ul>
</template>

<script>
  import PaletteItem from '@/components/layout/PaletteItem'

  export default {
    name: 'Palette',
    props: ['colors'],
    components: {
      PaletteItem
    }
  }
</script>

<style scoped>
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
