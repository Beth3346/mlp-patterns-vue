<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Ordered List</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <ordered-list />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import OrderedList from '@/components/patterns/01-compounds/01-text/OrderedList';

export default {
  name: 'OrderedListExample',
  components: {
    OrderedList
  }
};
</script>
