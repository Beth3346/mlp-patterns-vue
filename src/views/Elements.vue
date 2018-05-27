<template>
  <div class="elements">
    <h1 class="heading-main">Elements</h1>
    <ul class="elr-inline-list">
      <li><router-link to="/elements">All</router-link></li>
      <li><router-link to="/elements/global">Global</router-link></li>
      <li><router-link to="/elements/text">Text</router-link></li>
      <li><router-link to="/elements/navigation">Navigation</router-link></li>
      <li><router-link to="/elements/icons">Icons</router-link></li>
      <li><router-link to="/elements/forms">Forms</router-link></li>
      <li><router-link to="/elements/buttons">Buttons</router-link></li>
      <li><router-link to="/elements/images">Images</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Elements'
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
