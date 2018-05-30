<template>
  <div>
    <blocks-all />
    <compounds-text-all />
    <compounds-navigation-all />
    <compounds-forms-all />
    <compounds-buttons-all />
  </div>
</template>

<script>
import BlocksAll from '@/components/examples/01-compounds/00-blocks/BlocksAll';
import CompoundsTextAll from '@/components/examples/01-compounds/01-text/CompoundsTextAll';
import CompoundsNavigationAll from '@/components/examples/01-compounds/02-navigation/CompoundsNavigationAll';
import MediaAll from '@/components/examples/01-compounds/03-media/MediaAll';
import CompoundsFormsAll from '@/components/examples/01-compounds/04-forms/CompoundsFormsAll';
import CompoundsButtonsAll from '@/components/examples/01-compounds/05-buttons/CompoundsButtonsAll';

export default {
  name: 'CompoundsAll',
  components: {
    BlocksAll,
    CompoundsTextAll,
    CompoundsNavigationAll,
    CompoundsFormsAll,
    CompoundsButtonsAll
  }
};
</script>

