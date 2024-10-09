<template lang="pug">
  Layout
    .progress
      .menu.flex
        .menu-item.pointer 門診人數
        .menu-item.pointer.active 看診進度
        .menu-item.pointer 住院病患
        .menu-item.pointer 藥品管理
      .wrapper
        el-breadcrumb.breadcrumb(separator-class="el-icon-arrow-right")
          el-breadcrumb-item 病歷管理
          el-breadcrumb-item.breadActive 看診進度
        .wrapper.border
          .label 今日門診進度
          .table.border
            .t-header.grid
              template(v-for="item in headers")
                .t-cell {{ item.label }}
            .t-body
              template(v-for="(row, i) in tableData")
                .t-row.grid(:key="i" :class="row.disabled && 'disabled'")
                  template(v-for="item in headers")
                    .t-cell(v-if="item.key === 'order'") {{ i }}
                    .t-cell(v-else-if="item.key === 'name'") {{ row[item.key] | formatName }}
                    .t-cell(v-else) {{ row[item.key] | formatState }}
    
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout
  },
  data() {
    return {
      headers: [
        { label: '預約號碼', key: 'order' },
        { label: '病患姓名', key: 'name' },
        { label: '病歷號碼', key: 'id' },
        { label: '看診情況', key: 'status' },
        { label: '備註', key: 'comment' },
      ],
      tableData: [
        { name: '林斯文', id: '23546', status: 'done', comment: '', disabled: true },
        { name: '林斯文', id: '23546', status: 'done', comment: '', disabled: true },
        { name: '林斯文', id: '23546', status: 'pass', comment: '', disabled: true },
        { name: '林斯文', id: '23546', status: 'uncheck', comment: '', disabled: true },
        { name: '林斯文', id: '23546', status: 'done', comment: '', disabled: true },
        { name: '林斯文', id: '23546', status: 'wait', comment: '', disabled: false },
      ]
    };
  },
  filters: {
    formatState(val) {
      const map = {
        done: '已看診完成',
        pass: '已過號',
        uncheck: '未報到',
        wait: '尚未看診',
      }
      return map[val] ? map[val] : val
    },
    formatName(val) {
      return val[0] + '◯' + val[2];
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
$grid-temp: 100px 120px 130px 150px 1fr;
$table-border: 1px solid #ccc;

.progress {
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
