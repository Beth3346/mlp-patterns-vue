<template>
  <div class="text">
    <h2 class="heading-main">Image Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/images">All</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsImages'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
