<template>
<nav class="footer-nav">
  <ul class="footer-menu">
    <li :key="item.name" v-for="item in listitems" class="footer-menu-item"><a href="#">{{item.name}}</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'FooterNavigation',
  props: {
    listitems: Object
  }
};
</script>
