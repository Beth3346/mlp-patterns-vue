<template>
  <div>
    <div class="pattern"><back-to-top /></div>
    <div class="pattern"><button-primary /></div>
    <div class="pattern"><button-danger /></div>
    <div class="pattern"><button-success /></div>
    <div class="pattern"><button-info /></div>
  </div>
</template>

<script>
import BackToTop from '@/components/patterns/00-elements/05-buttons/BackToTop';
import ButtonPrimary from '@/components/patterns/00-elements/05-buttons/ButtonPrimary';
import ButtonDanger from '@/components/patterns/00-elements/05-buttons/ButtonDanger';
import ButtonSuccess from '@/components/patterns/00-elements/05-buttons/ButtonSuccess';
import ButtonInfo from '@/components/patterns/00-elements/05-buttons/ButtonInfo';

export default {
  name: 'ButtonsAll',
  components: {
    BackToTop,
    ButtonPrimary,
    ButtonDanger,
    ButtonSuccess,
    ButtonInfo
  }
};
</script>
