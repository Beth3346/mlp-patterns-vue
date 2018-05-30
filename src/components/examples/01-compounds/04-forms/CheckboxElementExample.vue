<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Checkbox Element</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <checkbox-element />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import CheckboxElement from '@/components/patterns/01-compounds/04-forms/CheckboxElement';

export default {
  name: 'CheckboxElementExample',
  components: {
    CheckboxElement
  }
};
</script>
