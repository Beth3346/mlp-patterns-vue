<template>
  <div>
    <CardHeader />
    <CardHeading />
    <CardStat />
    <CategoryHeader />
    <icon-block />
    <item-detail />
    <item-header />
    <info-section-header />
    <tab-element />
  </div>
</template>

<script>
import CardHeader from '@/components/patterns/01-compounds/00-blocks/CardHeader';
import CardHeading from '@/components/patterns/01-compounds/00-blocks/CardHeading';
import CardStat from '@/components/patterns/01-compounds/00-blocks/CardStat';
import CategoryHeader from '@/components/patterns/01-compounds/00-blocks/CategoryHeader';
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
    CategoryHeader,
    IconBlock,
    ItemDetail,
    ItemHeader,
    InfoSectionHeader,
    TabElement
  }
};
</script>

