<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Text Area Element</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <text-area-element />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import TextAreaElement from '@/components/patterns/01-compounds/04-forms/TextAreaElement';

export default {
  name: 'TextAreaElementExample',
  components: {
    TextAreaElement
  }
};
</script>
