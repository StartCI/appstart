<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script lang="jsx">
export default {
  async mounted() {
    const response = await $fetch('/api/test');
    console.log(response);
  }
}
</script>
