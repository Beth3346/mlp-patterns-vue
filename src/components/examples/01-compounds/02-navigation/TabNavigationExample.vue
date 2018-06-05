<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Tab Navigation</h2>
    </div>
    <TabNavigation :tabs="tabitems" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Accepts an array of tabs.</p>
      <pre>&lt;TabNavigation :tabs="tabitems" /&gt;</pre>
    </div>
  </div>
</template>

<script>
import { tabitems } from '@/data/data.json';

import TabNavigation from '@/components/patterns/01-compounds/02-navigation/TabNavigation';

export default {
  name: 'TabNavigationExample',
  data() {
    return {
      tabitems
    };
  },
  components: {
    TabNavigation
  }
};
</script>
