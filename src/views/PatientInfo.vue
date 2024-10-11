<template lang="pug">
  Layout
    .patientInfo
      .menu.flex
        .menu-item.pointer 門診人數
        .menu-item.pointer.active 看診進度
        .menu-item.pointer 住院病患
        .menu-item.pointer 藥品管理
      .wrapper
        SideMenu
    
</template>

<script>
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu.vue';

export default {
  components: {
    Layout,
    SideMenu
  },
  data() {
    return {
      data: [
        {
          name: '',
          id: '',
          birth: '',
          gender: '',
          insurance: '',
          age: '',
          blood: '',
          comment: '',
          record: [
            {},
          ]
        }
      ]
    };
  },
  filters: {
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
$grid-temp: 100px 120px 130px 150px 1fr;
$table-border: 1px solid #ccc;

.patientInfo {
  width: 100%;

  .border {
    border: $table-border;
  }

  .menu {
    height: 100px;
    background: $color-1;
    align-items: flex-end;
    .menu-item {
      padding: .5rem 2.5rem;
      background: $gray-1;
      &:not(:last-child) {
        border-right: $table-border;
      }
      &.active {
        position: relative;
        background: #fff;
        color: $color-1;
        font-weight: bold;
        &:after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 100%;
          height: .5rem;
          background: $color-4;
        }
      }
    }
  }

  .wrapper {
    padding: 3rem;

    .label {
      font-size: 18px;
      margin-bottom: .5rem;
    }

    .table {
      text-align: center;
      .t-header, .t-row {
        grid-template-columns: $grid-temp;
      }
      .t-header {
        background: $gray-1;
        border-bottom: $table-border;
      }
      .t-row {
        &:not(:last-child) {
          border-bottom: $table-border;
        }
        &.disabled {
          opacity: .7;
        }
      }
      .t-cell {
        padding: .75rem 1rem;
        &:not(:last-child) {
          border-right: $table-border;
        }
      }
    }
  }
}
</style>
