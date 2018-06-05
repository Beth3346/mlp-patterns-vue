<template>
  <div class="pattern-container">
    <div class="pattern-header" id="font">
      <h2 class="pattern-heading">Stat Label Example</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <StatLabel :label="label.label" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import StatLabel from '@/components/patterns/00-elements/01-text/StatLabel';
import { statLabels } from '@/data/data.json';

export default {
  name: 'StatLabelExample',
  data() {
    return {
      label: statLabels[0]
    };
  },
  components: {
    StatLabel
  }
};
</script>
