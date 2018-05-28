<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Button Info</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <button-info />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import ButtonInfo from '@/components/patterns/00-elements/05-buttons/ButtonInfo';

export default {
  name: 'ButtonInfoExample',
  components: {
    ButtonInfo
  }
};
</script>
