<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Card Details</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <card-details />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import CardDetails from '@/components/patterns/01-compounds/01-text/CardDetails';

export default {
  name: 'CardDetailsExample',
  components: {
    CardDetails
  }
};
</script>
