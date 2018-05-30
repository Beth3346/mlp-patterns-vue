<template>
  <div class="global">
    <h2 class="heading-main">Text</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/text">All</router-link></li>
      <li><router-link to="/compounds/text/card-details">Card Details</router-link></li>
      <li><router-link to="/compounds/text/copyright">Copyright</router-link></li>
      <li><router-link to="/compounds/text/inline-list">Inline List</router-link></li>
      <li><router-link to="/compounds/text/list">Unordered List</router-link></li>
      <li><router-link to="/compounds/text/ordered-list">Ordered List</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsText'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

