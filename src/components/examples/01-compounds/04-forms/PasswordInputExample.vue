<template>
  <div class="pattern-container">
    <div class="pattern-header">
      <h2 class="pattern-heading">Password Input</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, laudantium.</p>
    </div>
    <password-input />
    <div class="pattern-usage">
      <h3 class="pattern-usage-heading">Usage:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus?</p>
    </div>
  </div>
</template>

<script>
import PasswordInput from '@/components/patterns/01-compounds/04-forms/PasswordInput';

export default {
  name: 'PasswordInputExample',
  components: {
    PasswordInput
  }
};
</script>
