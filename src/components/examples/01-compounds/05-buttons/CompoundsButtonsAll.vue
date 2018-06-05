<template>
  <div>
    <div class="pattern">
      <ButtonGroup />
    </div>
    <div class="pattern">
      <PonyAction />
    </div>
  </div>
</template>

<script>
import ButtonGroup from '@/components/patterns/01-compounds/05-buttons/ButtonGroup';
import PonyAction from '@/components/patterns/01-compounds/05-buttons/PonyAction';

export default {
  name: 'CompoundsButtonsAll',
  components: {
    ButtonGroup,
    PonyAction
  }
};
</script>

