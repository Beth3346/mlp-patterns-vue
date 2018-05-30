<template>
  <div class="elr-card-header" v-if="imagePath">
    <figure class="elr-card-full-image">
      <a :href="url(item.name)">
        <img :src="imagePath" :alt="item.name">
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  data() {
    return {
      imagePath: 'http://placeimg.com/400/300/tech',
      item: {
        name: 'Blossom'
      },
      model: 'pony'
    };
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
