<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Button Group</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <button-group />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import ButtonGroup from '@/components/patterns/01-compounds/05-buttons/ButtonGroup';

export default {
  name: 'ButtonGroupExample',
  components: {
    ButtonGroup
  }
};
</script>
