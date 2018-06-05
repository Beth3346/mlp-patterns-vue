<template>
  <div>
    <div class="pattern"><avatar /></div>
    <div class="pattern"><ImageElement :img="img" /></div>
    <div class="pattern"><logo /></div>
  </div>
</template>

<script>
import Avatar from '@/components/patterns/00-elements/06-images/Avatar';
import ImageElement from '@/components/patterns/00-elements/06-images/Image';
import Logo from '@/components/patterns/00-elements/06-images/Logo';

export default {
  name: 'ImagesAll',
  data() {
    return {
      img: {
        src: 'http://placeimg.com/1000/800/tech',
        alt: 'some tech thing'
      }
    };
  },
  components: {
    Avatar,
    ImageElement,
    Logo
  }
};
</script>

