<template>
  <div>
    <ul>
      <li v-for="color in colors">
        <span>Name: {{color.name}}</span>
        <span>Hex Value: {{color.hex}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import colors from '@/data/colors.json'

  export default {
    name: 'ColorPalette',
    data () {
      return {
        colors
      }
    }
  }
</script>
