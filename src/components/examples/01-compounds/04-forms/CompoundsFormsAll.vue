<template>
  <div>
    <div class="pattern">
      <CheckboxElement />
    </div>
    <div class="pattern">
      <PasswordInput />
    </div>
    <div class="pattern">
      <RadioElement />
    </div>
    <div class="pattern">
      <SearchElement />
    </div>
    <div class="pattern">
      <SelectElement />
    </div>
    <div class="pattern">
      <TextAreaElement />
    </div>
    <div class="pattern">
      <TextInput />
    </div>
  </div>
</template>

<script>
import CheckboxElement from '@/components/patterns/01-compounds/04-forms/CheckboxElement';
import PasswordInput from '@/components/patterns/01-compounds/04-forms/PasswordInput';
import RadioElement from '@/components/patterns/01-compounds/04-forms/RadioElement';
import SearchElement from '@/components/patterns/01-compounds/04-forms/SearchElement';
import SelectElement from '@/components/patterns/01-compounds/04-forms/SelectElement';
import TextAreaElement from '@/components/patterns/01-compounds/04-forms/TextAreaElement';
import TextInput from '@/components/patterns/01-compounds/04-forms/TextInput';

export default {
  name: 'CompoundsFormsAll',
  components: {
    CheckboxElement,
    PasswordInput,
    RadioElement,
    SearchElement,
    SelectElement,
    TextAreaElement,
    TextInput
  }
};
</script>

