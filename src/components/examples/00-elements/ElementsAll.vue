<template>
  <div>
    <global-all />
    <text-all />
    <icon-all />
    <forms-all />
    <buttons-all />
    <images-all />
  </div>
</template>

<script>
import GlobalAll from '@/components/examples/00-elements/00-global/GlobalAll';
import TextAll from '@/components/examples/00-elements/01-text/TextAll';
import NavigationAll from '@/components/examples/00-elements/02-navigation/NavigationAll';
import IconAll from '@/components/examples/00-elements/03-icons/IconAll';
import FormsAll from '@/components/examples/00-elements/04-forms/FormsAll';
import ButtonsAll from '@/components/examples/00-elements/05-buttons/ButtonsAll';
import ImagesAll from '@/components/examples/00-elements/06-images/ImagesAll';

export default {
  name: 'ElementsAll',
  components: {
    GlobalAll,
    TextAll,
    NavigationAll,
    IconAll,
    FormsAll,
    ButtonsAll,
    ImagesAll
  }
};
</script>

