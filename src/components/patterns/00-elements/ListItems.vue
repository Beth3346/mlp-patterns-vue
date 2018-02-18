<template>
  <div>
    <h3 class="pattern-heading">Unordered List</h3>
    <ul>
      <li v-for="pony in ponies">{{pony.name}}</li>
    </ul>
    <h3 class="pattern-heading">Ordered List</h3>
    <ol>
      <li v-for="pony in ponies">{{pony.name}}</li>
    </ol>
    <h3 class="pattern-heading">Inline Unordered List</h3>
    <ul class="elr-inline-list">
      <li v-for="pony in ponies">{{pony.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { ponies } from '@/data/data.json'
  export default {
    name: 'ListItems',
    data () {
      return {
        ponies
      }
    }
  }
</script>

<style>
  .pattern-heading {
    padding-top: 20px;
  }
</style>
