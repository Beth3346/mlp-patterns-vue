<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Inline List</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <inline-list />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import InlineList from '@/components/patterns/01-compounds/01-text/InlineList';

export default {
  name: 'InlineListExample',
  components: {
    InlineList
  }
};
</script>
