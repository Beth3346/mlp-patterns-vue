<template>
  <div class="text">
    <h2 class="heading-main">Form Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/forms">All</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsForms'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
