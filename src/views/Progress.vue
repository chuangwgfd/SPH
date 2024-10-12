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
                .t-row.grid(:key="i" :class="row.disabled && 'disabled'" @click="handleCheckPatient(row)")
                  template(v-for="item in headers")
                    .t-cell(v-if="item.key === 'order'") {{ i+22 | formatOrder }}
                    .t-cell(v-else-if="item.key === 'name'") {{ row[item.key] | formatName }}
                    .t-cell(v-else :style="{ color: (row[item.key] === 'uncheck' || row[item.key] === 'pass') && 'red' }") {{ row[item.key] | formatState }}
    
</template>

<script>
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu.vue';
import RightTable from '@/components/RightTable.vue';

export default {
  components: {
    Layout,
    SideMenu,
    RightTable
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
        { name: '林斯文', id: '3058220', status: 'done', comment: '', disabled: true },
        { name: '劉O安', id: '3094238', status: 'done', comment: '', disabled: true },
        { name: '陳O玲', id: '2104585', status: 'pass', comment: '', disabled: true },
        { name: '李O庭', id: '2205604', status: 'uncheck', comment: '', disabled: true },
        { name: '林O婷', id: '3049583', status: 'done', comment: '', disabled: true },
        { name: '許永馨', id: '3532483', status: 'wait', comment: '', disabled: false, clickabled: true },
        { name: '許津儀', id: '2392803', status: 'wait', comment: '', disabled: false, clickabled: true },
        // { name: '張志先', id: '3575083', status: 'wait', comment: '', disabled: false, clickabled: true },
        { name: '吳O宇', id: '3028550', status: 'wait', comment: '' },
        { name: '楊O易', id: '2403622', status: 'wait', comment: '' },
        { name: '張O瑋', id: '2105968', status: 'wait', comment: '' },
        { name: '廖慈安', id: '', status: 'wait', comment: '' },
        { name: '張雅晴', id: '', status: 'wait', comment: '' },
        { name: '王士強', id: '', status: 'wait', comment: '' },
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
    },
    formatOrder(val) {
      return String(val).padStart(3, '0');
    },

  },
  methods: {
    /**
     * 
     */
     handleCheckPatient(row) {
      if (!row.clickabled) return
      this.$router.push({
        path: '/patient',
        query: { id: row.id }
      })
    }
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
        cursor: default;
        padding: .75rem 1rem;
        &:not(:last-child) {
          border-right: $table-border;
        }
      }
    }
  }
}
</style>
