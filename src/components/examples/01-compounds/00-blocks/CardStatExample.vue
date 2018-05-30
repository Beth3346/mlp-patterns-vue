<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Card Stat</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <card-stat />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import CardStat from '@/components/patterns/01-compounds/00-blocks/CardStat';

export default {
  name: 'CardStatExample',
  components: {
    CardStat
  }
};
</script>
