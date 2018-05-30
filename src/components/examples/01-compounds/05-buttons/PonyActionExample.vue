<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Pony Action</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <pony-action />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import PonyAction from '@/components/patterns/01-compounds/05-buttons/PonyAction';

export default {
  name: 'PonyActionExample',
  components: {
    PonyAction
  }
};
</script>
