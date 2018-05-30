<template>
  <ul class="card-stats">
    <li class="card-stat">
      <span class="card-stat-label">Collected:</span>
      <span class="card-stat-value">{{pony.collected}}</span>
    </li>
    <li class="card-stat">
      <span class="card-stat-label">Wishlisted:</span>
      <span class="card-stat-value">{{pony.wishlisted}}</span>
    </li>
    <li class="card-stat">
      <span class="card-stat-label">Favorites:</span>
      <span class="card-stat-value">{{pony.favorited}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardStat',
  data() {
    return {
      pony: {
        collected: 2,
        wishlisted: 3,
        favorited: 1
      }
    };
  }
};
</script>
