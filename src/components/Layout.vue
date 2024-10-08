<!-- src/components/Layout.vue -->
<template lang="pug">
  .layout
    Header
    slot

</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
</style>
