<template>
  <div>
    <h2 class="heading-main">Blocks</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/blocks">All</router-link></li>
      <li><router-link to="/compounds/blocks/card-header">Card Header</router-link></li>
      <li><router-link to="/compounds/blocks/card-stat">Card Stat</router-link></li>
      <li><router-link to="/compounds/blocks/category-header">Category Header</router-link></li>
      <li><router-link to="/compounds/blocks/icon-block">Icon Block</router-link></li>
      <li><router-link to="/compounds/blocks/info-section-header">Info Section Header</router-link></li>
      <li><router-link to="/compounds/blocks/item-detail">Item Detail</router-link></li>
      <li><router-link to="/compounds/blocks/item-header">Item Header</router-link></li>
      <li><router-link to="/compounds/blocks/tab">Tab</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsBlocks'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

