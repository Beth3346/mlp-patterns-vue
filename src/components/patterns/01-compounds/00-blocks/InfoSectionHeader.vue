<template>
  <div class="info-section-header">
    <!-- <notification :notification="notification" @dismissAlert="dismiss"></notification> -->
    <h1 class="info-section-heading">United States</h1>
    <p>American</p>
    <p>Ponies that were sold in the United States.</p>
    <div class="button-holder">
        <a href="#" class="elr-button elr-button-primary">Add a Country</a>
        <a href="#" class="elr-button elr-button-primary">See All Countries</a>
        <a href="#" class="elr-button elr-button-primary">Edit Country</a>
        <button class="elr-button elr-button-danger">Delete Country</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSectionHeader'
};
</script>
