<template>
  <div class="text">
    <h2 class="heading-main">Icon Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/icons">All</router-link></li>
      <li><router-link to="/elements/icons/icons">Icons</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsIcon'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
