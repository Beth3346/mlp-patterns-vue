<template>
  <div class="global">
    <h2 class="heading-main">Text</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/text">All</router-link></li>
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

