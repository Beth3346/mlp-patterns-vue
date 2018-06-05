<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Image</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <ImageElement :img="img" />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import ImageElement from '@/components/patterns/00-elements/06-images/Image';

export default {
  name: 'ImageExample',
  data() {
    return {
      img: {
        src: 'http://placeimg.com/1000/800/tech',
        alt: 'some tech thing'
      }
    };
  },
  components: {
    ImageElement
  }
};
</script>
