<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Item Stat Label Example</h2>
    </div>
    <StatusLabel :status="status.name" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import StatusLabel from '@/components/patterns/00-elements/01-text/StatusLabel';
import { status } from '@/data/data.json';

export default {
  name: 'StatusLabelExample',
  data() {
    return {
      status: status[0]
    };
  },
  components: {
    StatusLabel
  }
};
</script>
