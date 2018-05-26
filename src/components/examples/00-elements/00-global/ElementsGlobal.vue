<template>
  <div class="global">
    <h2 class="heading-main">Global Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/global">All</router-link></li>
      <li><router-link to="/elements/global/color-palette">Colors</router-link></li>
      <li><router-link to="/elements/global/fonts">Fonts</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsGlobal'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>

