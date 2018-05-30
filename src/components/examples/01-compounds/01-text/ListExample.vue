<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Unordered List</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <list-element />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import ListElement from '@/components/patterns/01-compounds/01-text/ListElement';

export default {
  name: 'ListExample',
  components: {
    ListElement
  }
};
</script>
