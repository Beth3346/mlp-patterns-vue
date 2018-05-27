<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">RadioInput</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <radio-input />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/patterns/00-elements/04-forms/RadioInput';

export default {
  name: 'RadioInputExample',
  components: {
    RadioInput
  }
};
</script>
