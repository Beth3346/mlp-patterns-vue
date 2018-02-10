<template>
  <div class="elements">
    <h1 class="heading-main">Elements</h1>
    <ul>
      <li><a href="#color-palette">Color Palette</a></li>
      <li><a href="#fonts">Fonts</a></li>
      <li><a href="#headings">Headings</a></li>
    </ul>
    <pattern-container patternName="Color Palette">
      <p slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloribus, saepe! Odit veniam accusantium facere nemo. At qui blanditiis obcaecati delectus quas debitis, ducimus voluptatibus!</p>
      <color-palette slot="pattern"></color-palette>
      <p slot="usage">Colors are a global pattern.</p>
    </pattern-container>
    <pattern-container patternName="Fonts">
      <p slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloribus, saepe! Odit veniam accusantium facere nemo. At qui blanditiis obcaecati delectus quas debitis, ducimus voluptatibus!</p>
      <fonts slot="pattern"></fonts>
      <p slot="usage">Fonts are a global pattern.</p>
    </pattern-container>
    <pattern-container patternName="Headings">
      <p slot="description">Headings h1 - h6</p>
      <headings slot="pattern"></headings>
      <p slot="usage">Headings are a global pattern.</p>
    </pattern-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PatternContainer from '@/components/layout/PatternContainer'
import ColorPalette from '@/components/patterns/00-elements/ColorPalette'
import Fonts from '@/components/patterns/00-elements/Fonts'
import Headings from '@/components/patterns/00-elements/Headings'

export default {
  name: 'home',
  components: {
    PatternContainer,
    ColorPalette,
    Fonts,
    Headings
  }
}
</script>

<style>
  .heading-main {
    font-size: 36px;
    font-weight: 900;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
</style>
