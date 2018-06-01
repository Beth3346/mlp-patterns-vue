<template>
  <nav class="pagination pagination-links-round">
    <button class="previous-pager" :class="{ disabled: noPrev() }" @click.prevent="paginate(pagination.firstUrl)" rel="prev">
      <i class="fa fa-angle-double-left"></i> First
    </button>
    <button class="previous-pager" :class="{ disabled: noPrev() }" @click.prevent="paginate(pagination.prevUrl)" rel="prev">
      <i class="fa fa-angle-double-left"></i> Previous
    </button>
    <ul class="pagination-list">
      <li :key="n.num" v-for="n in range()" :class="{ current: isCurrent(n.num) }" @click.prevent="paginate(n.url)">{{n.num}}</li>
    </ul>
    <button class="next-pager" :class="{ disabled: noNext() }" @click.prevent="paginate(pagination.lastUrl)" rel="next">
      Last <i class="fa fa-angle-double-right"></i>
    </button>
    <button class="next-pager" :class="{ disabled: noNext() }" @click.prevent="paginate(pagination.nextUrl)" rel="next">
      Next <i class="fa fa-angle-double-right"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'PaginationNavigation',
  props: {
    pagination: Object
  },
  methods: {
    paginate(url) {
      this.$emit('paginate', url);
    },
    noPrev() {
      return !this.pagination.prevUrl;
    },
    noNext() {
      return !this.pagination.nextUrl;
    },
    isCurrent(num) {
      return this.pagination.current === num;
    },
    range() {
      const pages = [];
      if (this.pagination.pageCount <= 10) {
        // if there are less than 10 pages
        const start = 1;
        const end = this.pagination.pageCount + 1;

        for (var i = start; i < end; i++) {
          pages.push({
            num: i,
            url: `${this.pagination.path}?page=${i}`
          });
        }

        return pages;
      } else if (this.pagination.pageCount >= this.pagination.current + 10) {
        // if we are somewhere in the middle
        const start = this.pagination.current;
        const end = start + 10;

        for (var i = start; i < end; i++) {
          pages.push({
            num: i,
            url: `${this.pagination.path}?page=${i}`
          });
        }

        return pages;
      } else if (this.pagination.pageCount === this.pagination.current) {
        // if you are on the last page of results
        const start = this.pagination.current - 10;
        const end = this.pagination.pageCount + 1;

        for (var i = start; i < end; i++) {
          pages.push({
            num: i,
            url: `${this.pagination.path}?page=${i}`
          });
        }

        return pages;
      } else if (this.pagination.current > this.pagination.pageCount - 10) {
        // if you are 10 pages or less from the last page
        const start = this.pagination.pageCount - 10;
        const end = this.pagination.pageCount + 1;

        for (var i = start; i < end; i++) {
          pages.push({
            num: i,
            url: `${this.pagination.path}?page=${i}`
          });
        }

        return pages;
      }
    }
  }
};
</script>

<style scoped>
.pagination-list > li {
  color: #f5398d;
  padding: 0;
  margin-left: 5px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
}

.pagination button {
  padding: 5px;
  margin: 0 5px;
}

.pagination-list > li.current {
  background-color: #f5398d;
  color: #fff;
}
</style>
