<template>
  <nav class="tab-section-nav">
    <ul class="tab-section-menu">
      <li :key="item.name" v-for="item in tabs">
        <button :id="formatId(item.tab)" type="button" class="tab-button" :data-tab="`#${item.tab}`">
          <span class="tab-name">{{item.name}}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TabNavigation',
  data() {
    return {
      tabs: [
        {
          name: 'Generation 1',
          tab: 'gen1'
        },
        {
          name: 'Nirvanas',
          tab: 'nirvanas'
        },
        {
          name: 'Generation 2',
          tab: 'gen2'
        },
        {
          name: 'Generation 3',
          tab: 'gen3'
        }
      ]
    };
  },
  methods: {
    formatId(name) {
      return name.replace(/tab/, 'button');
    }
  }
};
</script>
