<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/elements">Elements</router-link>
    </div>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<style>
  #app {
    max-width: 1200px;
    margin: auto;
  }

  #nav {
    padding: 10px 0;
  }

  .main-content {
    margin: 20px 0;
  }
</style>
