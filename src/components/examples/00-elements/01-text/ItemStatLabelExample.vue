<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Item Stat Label Example</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <ItemStatLabel :label="label.label" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import ItemStatLabel from '@/components/patterns/00-elements/01-text/ItemStatLabel';
import { statLabels } from '@/data/data.json';

export default {
  name: 'ItemStatLabelExample',
  data() {
    return {
      label: statLabels[0]
    };
  },
  components: {
    ItemStatLabel
  }
};
</script>
