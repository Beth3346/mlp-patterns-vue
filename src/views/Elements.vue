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
      <div slot="description">
        <p>MyLittlePonyCollection uses a sans serif font throughout the entire site</p>
        <p>Font weights can vary for headings and important content.</p>
      </div>
      <fonts slot="pattern"></fonts>
      <p slot="usage">Fonts are a global pattern.</p>
    </pattern-container>
    <pattern-container patternName="Headings">
      <p slot="description">Headings h1 - h6</p>
      <headings slot="pattern"></headings>
      <div slot="usage"><pre>{{headingEls}}</pre></div>
    </pattern-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { headings } from '@/data/data.json'

import PatternContainer from '@/components/layout/PatternContainer'
import ColorPalette from '@/components/patterns/00-elements/ColorPalette'
import Fonts from '@/components/patterns/00-elements/Fonts'
import Headings from '@/components/patterns/00-elements/Headings'

export default {
  name: 'home',
  data () {
    return {
      headings
    }
  },
  components: {
    PatternContainer,
    ColorPalette,
    Fonts,
    Headings
  },
  computed: {
    headingEls () {
      return `<h1>${this.headings.short}</h1>
<h2>${this.headings.short}</h2>
<h3>${this.headings.short}</h3>
<h4>${this.headings.short}</h4>
<h5>${this.headings.short}</h5>
<h6>${this.headings.short}</h6>`
    }
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
