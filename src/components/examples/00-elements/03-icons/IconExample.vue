<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Icon</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <icon />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Icons are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/patterns/00-elements/03-icons/Icon';

export default {
  name: 'IconExample',
  components: {
    Icon
  }
};
</script>
