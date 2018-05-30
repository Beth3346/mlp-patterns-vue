<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Item Detail</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <ItemDetail />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import ItemDetail from '@/components/patterns/01-compounds/00-blocks/ItemDetail';

export default {
  name: 'ItemDetailExample',
  components: {
    ItemDetail
  }
};
</script>
