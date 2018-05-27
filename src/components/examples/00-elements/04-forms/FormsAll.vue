<template>
  <div>
    <div class="pattern"><checkbox-element /></div>
    <div class="pattern"><inputs-element /></div>
    <div class="pattern"><radio-input /></div>
    <div class="pattern"><search /></div>
    <div class="pattern"><select-element /></div>
    <div class="pattern"><text-area-element /></div>
  </div>
</template>

<script>
import CheckboxElement from '@/components/patterns/00-elements/04-forms/Checkbox';
import InputsElement from '@/components/patterns/00-elements/04-forms/Inputs';
import RadioInput from '@/components/patterns/00-elements/04-forms/RadioInput';
import Search from '@/components/patterns/00-elements/04-forms/Search';
import SelectElement from '@/components/patterns/00-elements/04-forms/Select';
import TextAreaElement from '@/components/patterns/00-elements/04-forms/TextArea';

export default {
  name: 'NavigationAll',
  components: {
    CheckboxElement,
    InputsElement,
    RadioInput,
    Search,
    SelectElement,
    TextAreaElement
  }
};
</script>
