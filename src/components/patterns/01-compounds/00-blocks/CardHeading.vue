<template>
  <div class="card-item-header">
    <h2 class="card-title">
      <a :href="url(item.name)">{{item.name}}</a>
    </h2>
    <h3 v-if="item.description" class="card-subtitle">{{item.description}}</h3>
  </div>
</template>

<script>
export default {
  name: 'CardHeading',
  data() {
    return {
      item: {
        name: 'Blossom',
        description: 'A purple pony with flowers'
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

