<template>
  <div id="app">
    <header class="header-main">
      <h1><router-link to="/">MyLittlePonyCollection Pattern Library</router-link></h1>
    </header>
    <div id="nav">
      <router-link to="/elements">Elements</router-link> |
      <router-link to="/compounds">Compounds</router-link> |
      <router-link to="/components">Components</router-link> |
      <router-link to="/sections">Sections</router-link> |
      <router-link to="/pages">Pages</router-link>
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

.pattern {
  width: 100%;
  margin: 20px 0;
}

.pattern-container {
  border: 1px solid #eee;
  margin: 10px auto;
  padding: 20px;
}

.pattern-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.pattern-heading {
  padding: 0 0 10px;
  margin: 0;
  font-size: 24px;
  font-weight: 900;
}

.pattern-usage {
  padding: 20px 0 10px;
}

.pattern-usage p {
  font-size: 14px;
}

.pattern-usage p:last-child {
  padding-bottom: 0;
}

.pattern-usage-heading {
  font-size: 18px;
  font-weight: 700;
  padding: 0 0 10px;
  margin: 0;
}
</style>
