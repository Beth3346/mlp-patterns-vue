<template>
  <img :src="img.src" :alt="img.alt">
</template>

<script>
export default {
  name: 'ImageElement',
  props: {
    img: {
      type: Object,
      required: true
    }
  }
};
</script>
