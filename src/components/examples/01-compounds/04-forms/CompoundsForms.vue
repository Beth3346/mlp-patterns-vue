<template>
  <div class="global">
    <h2 class="heading-main">Forms</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/forms">All</router-link></li>
      <li><router-link to="/compounds/forms/checkbox">All</router-link></li>
      <li><router-link to="/compounds/forms/password">All</router-link></li>
      <li><router-link to="/compounds/forms/radio">All</router-link></li>
      <li><router-link to="/compounds/forms/search">All</router-link></li>
      <li><router-link to="/compounds/forms/select">All</router-link></li>
      <li><router-link to="/compounds/forms/text-area">All</router-link></li>
      <li><router-link to="/compounds/forms/text-input">All</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'CompoundsForms'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

