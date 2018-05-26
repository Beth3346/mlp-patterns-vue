<template>
  <div class="text">
    <h2 class="heading-main">Text Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/text">All</router-link></li>
      <li><router-link to="/elements/text/headings">Headings</router-link></li>
      <li><router-link to="/elements/text/inline-elements">Inline Elements</router-link></li>
      <li><router-link to="/elements/text/list-items">List Items</router-link></li>
      <li><router-link to="/elements/text/paragraphs">Paragraphs</router-link></li>
      <li><router-link to="/elements/text/section-header">Section Header</router-link></li>
      <li><router-link to="/elements/text/section-heading">Section Heading</router-link></li>
      <li><router-link to="/elements/text/section-heading-large">Section Heading Large</router-link></li>
      <li><router-link to="/elements/text/section-subheading">Section Subheading</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsText'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
