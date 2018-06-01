<template>
  <div class="global">
    <h2 class="heading-main">Navigation</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/navigation">All</router-link></li>
      <li><router-link to="/compounds/navigation/footer-navigation">Footer Navigation</router-link></li>
      <li><router-link to="/compounds/navigation/main-navigation">Main Navigation</router-link></li>
      <li><router-link to="/compounds/navigation/pagination">Pagination</router-link></li>
      <li><router-link to="/compounds/navigation/tab-navigation">Tab Navigation</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsNavigation'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

