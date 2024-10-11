<template lang="pug">
  .sideMenu.flex-col
    .menu-item.pointer(v-for="(item, i) in menu" :key="i" :class="i === 0 && 'action'") {{ item }}

</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      menu: [
        '病患資料',
        '歷史病歷',
        '檢驗查詢',
        '診斷證明',
        '住院紀錄',
        '報告彙整',
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .sideMenu {
    width: 250px;
    background: $gray-2;
    height: 100%;
    .menu-item {
      padding: .75rem;
      border-bottom: 1px solid #666;
      border-left: .5rem solid #999;
      &.action {
        background: #e2eaf4;
        border-left: .5rem solid $color-4;
      }
      &:hover {
        background: #e2eaf4;
      }
    }
  }
</style>