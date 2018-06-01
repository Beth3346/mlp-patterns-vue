<template>
  <div class="global">
    <h2 class="heading-main">Forms</h2>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds/forms">All</router-link></li>
      <li><router-link to="/compounds/forms/checkbox">Checkbox Element</router-link></li>
      <li><router-link to="/compounds/forms/password">Password</router-link></li>
      <li><router-link to="/compounds/forms/radio">Radio Input</router-link></li>
      <li><router-link to="/compounds/forms/search">Search Input</router-link></li>
      <li><router-link to="/compounds/forms/select">Select Group</router-link></li>
      <li><router-link to="/compounds/forms/text-area">Text Area</router-link></li>
      <li><router-link to="/compounds/forms/text-input">Text Input</router-link></li>
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

