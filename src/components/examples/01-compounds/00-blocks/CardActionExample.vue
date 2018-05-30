<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Card Action</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <card-action />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import CardAction from '@/components/patterns/01-compounds/00-blocks/CardAction';

export default {
  name: 'CardActionExample',
  components: {
    CardAction
  }
};
</script>
