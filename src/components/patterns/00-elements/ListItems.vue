<template>
  <div>
    <ul>
      <li v-for="pony in ponies">{{pony.name}}</li>
    </ul>
    <ol>
      <li v-for="pony in ponies">{{pony.name}}</li>
    </ol>
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
