<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Inline Link</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque ex ut veniam illo, in ipsam odit omnis eos dolores!</p>
    </div>
    <inline-link />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Fonts are a global pattern.</p>
    </div>
  </div>
</template>

<script>
import InlineLink from '@/components/patterns/00-elements/02-navigation/InlineLink';

export default {
  name: 'InlineLinkExample',
  components: {
    InlineLink
  }
};
</script>
