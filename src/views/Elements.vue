<template>
  <div class="elements">
    <h1 class="heading-main">Elements</h1>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/global">Global</router-link></li>
      <li><router-link to="/elements/text">Text</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { headings, ponies } from '@/data/data.json';

export default {
  name: 'Elements',
  data() {
    return {
      headings,
      ponies
    };
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
