<template>
  <div class="elements">
    <h1 class="heading-main">Compounds</h1>
    <ul class="elr-inline-list">
      <li><router-link to="/compounds">All</router-link></li>
      <li><router-link to="/compounds/blocks">Blocks</router-link></li>
      <li><router-link to="/compounds/navigation">Navigation</router-link></li>
      <li><router-link to="/compounds/media">Media</router-link></li>
      <li><router-link to="/compounds/forms">Forms</router-link></li>
      <li><router-link to="/compounds/buttons">Buttons</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Compounds',
  data() {
    return {};
  }
};
</script>

<style>
.heading-main {
  font-size: 36px;
  font-weight: 900;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
</style>
