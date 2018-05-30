<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Copyright</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <copyright-text />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import CopyrightText from '@/components/patterns/01-compounds/01-text/CopyrightText';

export default {
  name: 'CopyrightExample',
  components: {
    CopyrightText
  }
};
</script>
