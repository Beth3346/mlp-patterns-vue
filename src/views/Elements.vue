<template>
  <div class="elements">
    <h1 class="heading-main">Elements</h1>
    <ul class="elr-inline-list">
      <li><a href="#color-palette">Color Palette</a></li>
      <li><a href="#fonts">Fonts</a></li>
      <li><a href="#headings">Headings</a></li>
      <li><a href="#inline-elements">Inline Elements</a></li>
      <li><a href="#list-items">List Items</a></li>
      <li><a href="#paragraphs">Paragraphs</a></li>
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
    <pattern-container patternName="Inline Elements">
      <p slot="description">Basic inline elements</p>
      <inline-elements slot="pattern"></inline-elements>
      <div slot="usage"><pre>{{inlineEls}}</pre></div>
    </pattern-container>
    <pattern-container patternName="List Items">
      <p slot="description">Basic HTML lists</p>
      <list-items slot="pattern"></list-items>
      <div slot="usage">
        <pre>&lt;ul&gt;<span style="text-indent: 10px; display: block" :key="pony.name" v-for="(pony, index) in ponies">&lt;li&gt;{{pony.name}}&lt;/li&gt;<br v-if="index !== pony.length - 1"></span>&lt;/ul&gt;</pre>
      </div>
      <div slot="usage">
        <pre>&lt;ol&gt;<span style="text-indent: 10px; display: block" :key="pony.name" v-for="(pony, index) in ponies">&lt;li&gt;{{pony.name}}&lt;/li&gt;<br v-if="index !== pony.length - 1"></span>&lt;/ol&gt;</pre>
      </div>
      <div slot="usage">
        <pre>&lt;ul class="elr-inline-list"&gt;<span style="text-indent: 10px; display: block" :key="pony.name" v-for="(pony, index) in ponies">&lt;li&gt;{{pony.name}}&lt;/li&gt;<br v-if="index !== pony.length - 1"></span>&lt;/ul&gt;</pre>
      </div>
    </pattern-container>
    <pattern-container patternName="Paragraphs">
      <p slot="description">Basic paragraphs</p>
      <paragraphs slot="pattern"></paragraphs>
      <div slot="usage"><pre>&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error hic quod quaerat corrupti. Sapiente fugit minima, praesentium omnis modi id neque molestiae, quisquam reprehenderit cupiditate!&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus aperiam consequatur, modi quis perspiciatis nemo hic temporibus dicta laborum unde maiores doloremque quibusdam facilis voluptas, eius laudantium amet in!&lt;/p&gt;</pre></div>
    </pattern-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { headings, ponies } from '@/data/data.json';

import PatternContainer from '@/components/layout/PatternContainer';
import ColorPalette from '@/components/patterns/00-elements/ColorPalette';
import Fonts from '@/components/patterns/00-elements/Fonts';
import Headings from '@/components/patterns/00-elements/Headings';
import InlineElements from '@/components/patterns/00-elements/InlineElements';
import ListItems from '@/components/patterns/00-elements/ListItems';
import Paragraphs from '@/components/patterns/00-elements/Paragraphs';

export default {
  name: 'Elements',
  data() {
    return {
      headings,
      ponies
    };
  },
  components: {
    PatternContainer,
    ColorPalette,
    Fonts,
    Headings,
    InlineElements,
    ListItems,
    Paragraphs
  },
  computed: {
    headingEls() {
      return `<h1>${this.headings.short}</h1>
<h2>${this.headings.short}</h2>
<h3>${this.headings.short}</h3>
<h4>${this.headings.short}</h4>
<h5>${this.headings.short}</h5>
<h6>${this.headings.short}</h6>`;
    },
    inlineEls() {
      return `<b>Bold</b><br>
<strong>Strong</strong><br>
<i>Italic</i><br>
<em>Emphasis</em><br>
<code>Code</code><br>
<span>Span</span><br>
<small>Small</small>`;
    }
  }
};
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
