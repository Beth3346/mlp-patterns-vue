<template>
  <div id="app">
    <header class="header-main">
      <h1><router-link to="/">MyLittlePonyCollection Pattern Library</router-link></h1>
    </header>
    <div id="nav">
      <router-link to="/elements">Elements</router-link> |
      <router-link to="/compounds">Compounds</router-link>
    </div>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
@import '/sass/_config.scss';

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

.header-main {
  padding: 10px 0;

  h1 {
    color: #ef0c71;
    font-size: 24px;
    font-weight: 900;

    a {
      text-decoration: none;
    }
  }
}
</style>
