<template lang="pug">
  .smallTable.flex-col(:style="{'height': height}")
    .header {{ title }}
    template(v-for="item in list")
      .row {{ item }}
    
</template>

<script>
export default {
  name: 'SmallTable',
  props: {
    title: String,
    list: Array,
    height: String,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .smallTable {
    width: 100%;
    border: 1px solid #999;
    background: #fff;
    font-size: 14px;
    overflow: auto;
    .header {
      position: sticky;
      top: 0;
      color: #fff;
      background: $color-3;
      text-align: center;
      padding: .25rem;
    }
    .row {
      padding: .25rem .5rem;
      border-bottom: 1px solid #ccc;
    }
  }

</style>

