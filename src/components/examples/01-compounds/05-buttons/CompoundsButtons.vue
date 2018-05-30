<template>
  <div class="global">
    <h2 class="heading-main">Buttons</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/buttons">All</router-link></li>
      <li><router-link to="/compounds/buttons/button-group">Button Group</router-link></li>
      <li><router-link to="/compounds/buttons/pony-action">Pony Action</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsButtons'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

