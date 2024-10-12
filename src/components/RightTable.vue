<template lang="pug">
  .rightTable.flex-col
    .doctor-info.flex
      span 江浩宇 醫師
      span 科別：整型外科
      span 班別：一般門診

    .table
      .header 上午診【候診名單】共有38人
      .t-header.grid
        .t-cell(v-for="item in header") {{ item.label }}
      .t-body
        .t-row.grid(v-for="(row, i) in data1")
          template(v-for="item in header")
            .t-cell(v-if="item.key === 'order'") {{ i+23 | formatOrder }}
            .t-cell(v-else) {{ row[item.key] }}

    .table
      .header 下午診【候診名單】共有36人
      .t-header.grid
        .t-cell(v-for="item in header") {{ item.label }}
      .t-body
        .t-row.grid(v-for="(row, i) in data2")
          template(v-for="item in header")
            .t-cell(v-if="item.key === 'order'") {{ i+1 | formatOrder }}
            .t-cell(v-else) {{ row[item.key] }}
        
    
</template>

<script>
export default {
  name: 'RightTable',
  data() {
    return {
      header: [
        { label: '掛號號碼', key: 'order' },
        { label: '病患姓名', key: 'name' },
        { label: '性別', key: 'gender' },
        { label: '病歷號碼', key: 'id' },
        { label: '備註', key: 'comment' },
      ],
      data1: [
        { name: '劉禹安', gender: '男', id: '3058208', comment: '' },
        { name: '陳文玲', gender: '女', id: '2462503', comment: '' },
        { name: '李世庭', gender: '男', id: '2622886', comment: '' },
        { name: '林小婷', gender: '女', id: '3532483', comment: '' },
        { name: '許永馨', gender: '女', id: '3240572', comment: '' },
        { name: '許津儀', gender: '女', id: '2392803', comment: '' },
        { name: '章小杰', gender: '男', id: '2869005', comment: '' },
        { name: '王安妮', gender: '女', id: '3068526', comment: '' },
        { name: '陳品恩', gender: '女', id: '2724450', comment: '' },
        { name: '廖慈安', gender: '女', id: '3062855', comment: '' },
        { name: '張雅晴', gender: '女', id: '3142500', comment: '' },
        { name: '王士強', gender: '男', id: '2822774', comment: '' },
        { name: '林文禹', gender: '女', id: '2234250', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '劉禹安', gender: '男', id: '123132', comment: '' },
        { name: '劉禹安', gender: '男', id: '123132', comment: '' },
        { name: '劉禹安', gender: '男', id: '123132', comment: '' },
        { name: '劉禹安', gender: '男', id: '123132', comment: '' },
      ],
      data2: [
        { name: '林君宜', gender: '女', id: '2166456', comment: '' },
        { name: '王一語', gender: '女', id: '2211540', comment: '' },
        { name: '彭與哲', gender: '男', id: '2771396', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
        { name: '林旬言', gender: '男', id: '3186529', comment: '' },
      ],
    }
  },
  filters: {
    formatOrder(val) {
      return String(val).padStart(3, '0');
    },
  }
}
</script>

<style lang="scss" scoped>
  .rightTable {
    gap: .5rem;
    .doctor-info {
      justify-content: flex-end;
      gap: 1rem;
    }
    .table {
      position: relative;
      width: 400px;
      height: 400px;
      overflow: auto;
      border: 1px solid #999;
      background: #fff;

      .header {
        position: sticky;
        top: 0;
        color: #fff;
        background: $color-3;
        font-size: 14px;
        text-align: center;
        padding: .25rem;
      }

      .grid {
        grid-template-columns: 70px 1fr 40px 70px 1fr;
      }

      .t-header {
        position: sticky;
        top: 28px;
        background: $gray-2;
        font-weight: bold;
      }
      .t-row {
        border-top: 1px solid $gray-1;
      }
      .t-cell {
        font-size: 12px;
        text-align: center;
        padding: .25rem;
        &:not(:last-child) {
          border-right: 1px solid $gray-1;
        }
      }
    }
  }

</style>

