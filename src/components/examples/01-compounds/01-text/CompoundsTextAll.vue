<template>
  <div>
    <div class="pattern"><CardDetails/></div>
    <div class="pattern"><CopyrightText/></div>
    <div class="pattern"><InlineList/></div>
    <div class="pattern"><ListElement/></div>
    <div class="pattern"><OrderedList/></div>
  </div>
</template>

<script>
import CardDetails from '@/components/patterns/01-compounds/01-text/CardDetails';
import CopyrightText from '@/components/patterns/01-compounds/01-text/CopyrightText';
import InlineList from '@/components/patterns/01-compounds/01-text/InlineList';
import ListElement from '@/components/patterns/01-compounds/01-text/ListElement';
import OrderedList from '@/components/patterns/01-compounds/01-text/OrderedList';

export default {
  name: 'CompoundsTextAll',
  components: {
    CardDetails,
    CopyrightText,
    InlineList,
    ListElement,
    OrderedList
  }
};
</script>

