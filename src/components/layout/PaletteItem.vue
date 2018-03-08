<template>
  <div class="palette">
    <div class="color" :style="`background-color: ${hex}`">
      <p class="color-code">{{hex}}</p>
    </div>
    <p class="palette-info">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'PaletteItem',
  props: {
    name: String,
    hex: String
  }
}
</script>

<style scoped>
  .color {
    width: 100%;
    height: 80px;
    border-radius: 3px;
  }

  .palette {
    background-color: #fff;
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .color-code {
    color: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 14px;
  }

  .palette-info {
    padding: 10px 0 0;
    font-size: 14px;
  }
</style>
