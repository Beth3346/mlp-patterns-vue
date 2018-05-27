<template>
  <div class="text">
    <h2 class="heading-main">Navigation Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/navigation">All</router-link></li>
      <li><router-link to="/elements/navigation/inline-link">Inline Link</router-link></li>
      <li><router-link to="/elements/navigation/link">Link</router-link></li>
      <li><router-link to="/elements/navigation/menu-item">Menu Item</router-link></li>
      <li><router-link to="/elements/navigation/pagination">Pagination</router-link></li>
      <li><router-link to="/elements/navigation/tab-navigation">Tab Navigation</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsNavigation'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
