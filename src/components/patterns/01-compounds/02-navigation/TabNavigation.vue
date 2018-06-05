<template>
  <nav class="tab-section-nav">
    <ul class="tab-section-menu">
      <li :key="item.name" v-for="item in tabs">
        <button type="button" class="tab-button" :class="{active: item.active}">
          <span class="tab-name">{{item.name}}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TabNavigation',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatId(name) {
      return name.replace(/tab/, 'button');
    }
  }
};
</script>
