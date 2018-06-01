<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Image Element</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <ImageElement />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import ImageElement from '@/components/patterns/01-compounds/03-media/ImageElement';

export default {
  name: 'ImageElementExample',
  components: {
    ImageElement
  }
};
</script>
