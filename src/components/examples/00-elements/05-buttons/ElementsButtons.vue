<template>
  <div class="text">
    <h2 class="heading-main">Button Elements</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/elements/buttons">All</router-link></li>
      <li><router-link to="/elements/buttons/back-to-top">Back to Top</router-link></li>
      <li><router-link to="/elements/buttons/primary">Primary</router-link></li>
      <li><router-link to="/elements/buttons/danger">Danger</router-link></li>
      <li><router-link to="/elements/buttons/success">Success</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ElementsButtons'
};
</script>

<style lang="scss" scoped>
.heading-main {
  font-size: 30px;
}
</style>
