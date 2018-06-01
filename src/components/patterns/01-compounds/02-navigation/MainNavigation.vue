<template>
<nav class="main-nav">
  <ul class="main-menu">
    <li :key="item.name" v-for="item in listitems" class="main-menu-item"><a :class="{'active': item.active}" href="#">{{item.name}}</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    listitems: Object
  }
};
</script>
