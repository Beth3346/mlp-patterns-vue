<template>
  <div>
    <div class="pattern">
      <CardHeader />
    </div>
    <div class="pattern">
      <CardHeading />
    </div>
    <div class="pattern">
      <CardStat />
    </div>
    <div class="pattern">
      <GroupHeader />
    </div>
    <div class="pattern">
      <IconBlock />
    </div>
    <div class="pattern">
      <ItemDetail />
    </div>
    <div class="pattern">
      <ItemHeader />
    </div>
    <div class="pattern">
      <InfoSectionHeader />
    </div>
    <div class="pattern">
      <TabElement />
    </div>
  </div>
</template>

<script>
import CardHeader from '@/components/patterns/01-compounds/00-blocks/CardHeader';
import CardHeading from '@/components/patterns/01-compounds/00-blocks/CardHeading';
import CardStat from '@/components/patterns/01-compounds/00-blocks/CardStat';
import GroupHeader from '@/components/patterns/01-compounds/00-blocks/GroupHeader';
import IconBlock from '@/components/patterns/01-compounds/00-blocks/IconBlock';
import ItemDetail from '@/components/patterns/01-compounds/00-blocks/ItemDetail';
import ItemHeader from '@/components/patterns/01-compounds/00-blocks/ItemHeader';
import InfoSectionHeader from '@/components/patterns/01-compounds/00-blocks/InfoSectionHeader';
import TabElement from '@/components/patterns/01-compounds/00-blocks/TabElement';

export default {
  name: 'BlocksAll',
  components: {
    CardHeader,
    CardHeading,
    CardStat,
    GroupHeader,
    IconBlock,
    ItemDetail,
    ItemHeader,
    InfoSectionHeader,
    TabElement
  }
};
</script>

