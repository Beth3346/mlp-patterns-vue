<template>
  <div class="card-header" v-if="img">
    <figure class="card-full-image">
      <a :href="url(item.name)">
        <ImageElement :img="img" />
      </a>
    </figure>
  </div>
</template>

<script>
import ImageElement from '@/components/patterns/00-elements/06-images/Image';

export default {
  name: 'CardHeader',
  data() {
    return {
      img: {
        src: 'http://placeimg.com/1000/800/tech',
        alt: 'some tech thing'
      },
      item: {
        name: 'Blossom'
      },
      model: 'pony'
    };
  },
  components: {
    ImageElement
  },
  methods: {
    slugify(str) {
      if (str) {
        // remove spaces
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
        var to = 'aaaaaeeeeeiiiiooooouuuunc------';

        for (var i = 0, l = from.length; i < l; i++) {
          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str
          .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes
      }

      return str;
    },
    url(name) {
      return this.slug ? this.slug : `/${this.model}/${this.slugify(name)}`;
    }
  }
};
</script>
