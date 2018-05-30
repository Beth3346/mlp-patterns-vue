<template>
  <div class="global">
    <h2 class="heading-main">Media</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/media">All</router-link></li>
      <li><router-link to="/compounds/media/image">Image</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsMedia'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

