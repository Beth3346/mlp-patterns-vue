<template>
  <div>
    <div class="pattern"><avatar /></div>
    <div class="pattern"><image-element /></div>
    <div class="pattern"><logo /></div>
  </div>
</template>

<script>
import Avatar from '@/components/patterns/00-elements/06-images/Avatar';
import ImageElement from '@/components/patterns/00-elements/06-images/Image';
import Logo from '@/components/patterns/00-elements/06-images/Logo';

export default {
  name: 'ImagesAll',
  components: {
    Avatar,
    ImageElement,
    Logo
  }
};
</script>

