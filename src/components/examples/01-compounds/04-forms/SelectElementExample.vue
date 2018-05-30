<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Select Element</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <select-element />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import SelectElement from '@/components/patterns/01-compounds/04-forms/SelectElement';

export default {
  name: 'SelectElementExample',
  components: {
    SelectElement
  }
};
</script>
