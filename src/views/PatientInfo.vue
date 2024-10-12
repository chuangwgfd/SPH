<template lang="pug">
  Layout
    .patientInfo
      .menu.flex
        .menu-item.pointer 門診人數
        .menu-item.pointer.active 看診進度
        .menu-item.pointer 住院病患
        .menu-item.pointer 藥品管理
      .wrapper
        el-breadcrumb.breadcrumb(separator-class="el-icon-arrow-right")
          el-breadcrumb-item 病歷管理
          el-breadcrumb-item 看診進度
          el-breadcrumb-item.breadActive 病患資料
        .wrapper-inner.flex
          .side
            SideMenu
          .info-section.flex-1
            label 病患基本資料
            .flex
              .basic.grid.flex-1
                template(v-for="item in infoCol")
                  .label.col {{ item.label }}
                  .col {{ patientData[item.key] }}

              button.actionBtn.pointer.flex-col.center-center(@click="handleClickBtn")
                img(:src="img")
                //- span 進行
                //- span 看診
                //- Icon.arrow(icon="tdesign:swap-right")

            label 過敏紀錄
            .allergy.grid
              .label.col 過敏藥物名稱
              .label.col 過敏反應一
              .label.col 過敏反應二
              .label.col 註記日期
              template(v-for="obj in patientData.allergy")
                template(v-for="item in obj")
                  .col {{ item }}

            label 門診看診紀錄
            .record.grid
              .label.col 看診日期
              .label.col 診斷說明
              .label.col 備註
              template(v-for="obj in patientData.record")
                template(v-for="item in obj")
                  .col {{ item }}

    
</template>

<script>
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu.vue';
import img from '@/assets/images/4.jpg'
import { Icon } from '@iconify/vue2';

export default {
  components: {
    Layout,
    SideMenu,
    Icon
  },
  data() {
    return {
      img,
      infoCol: [
        { label:'姓名', key: 'name' },
        { label:'身分證號碼', key: 'national_id' },
        { label:'病歷號碼', key: 'id' },
        { label:'出生日期', key: 'birth' },
        { label:'性別', key: 'gender' },
        { label:'健保身份', key: 'insurance' },
        { label:'患者年齡', key: 'age' },
        { label:'血型', key: 'blood' },
        { label:'註記', key: 'comment' },
      ],
      allergyCol: [
      ],
      data: [
        {
          name: '許永馨',
          national_id: 'F2209837121',
          id: '3532483',
          birth: '1964/4/11',
          gender: '女',
          insurance: '符合',
          age: '61歲',
          blood: 'A',
          comment: '無',
          allergy: [
            { name: 'Aspirin', action1: 'FEVER', action2: '', time: '2024.03.05' },
            { name: 'Chloramohenicol', action1: 'RASH', action2: '', time: '2024.03.05' },
          ],
          record: [
            { date: '2024.02.16', description: '因咳嗽症狀就醫', comment: '' },
            { date: '　', description: '　', comment: '　' },
            { date: '　', description: '　', comment: '　' }
          ]
        },
        {
          name: '許津儀',
          national_id: 'K2223567909',
          id: '2392803',
          birth: '1999/7/8',
          gender: '女',
          insurance: '符合',
          age: '26歲',
          blood: 'O',
          comment: '無',
          allergy: [
            { name: '　', action1: '　', action2: '　', time: '　' },
            { name: '　', action1: '　', action2: '　', time: '　' },
          ],
          record: [
            { date: '2024.02.20', description: '一般感冒症狀', comment: '' },
            { date: '　', description: '　', comment: '　' },
            { date: '　', description: '　', comment: '　' }
          ]
        },
        {
          name: '張志先',
          national_id: 'F12828273655',
          id: '3575083',
          birth: '1952/3/18',
          gender: '男',
          insurance: '符合',
          age: '73歲',
          blood: 'AB',
          comment: '無',
          allergy: [
            { name: 'Chloramohenicol', action1: 'RASH', action2: '', time: '2025.02.12' },
            { name: '　', action1: '　', action2: '　', time: '　' },
          ],
          record: [
            { date: '2025.02.12', description: '因輕微感冒症狀就醫', comment: '　' },
            { date: '　', description: '　', comment: '　' },
            { date: '　', description: '　', comment: '　' }
          ]
        },
      ]
    };
  },
  computed: {
    patientData() {
      let id = this.$route.query.id;
      return this.data.find(d => d.id === String(id))
    },
  },
  mounted() {
    window.scrollTo(0, 0); // 切换到该页面时滚动到顶部
  },
  methods: {
    handleClickBtn() {
      this.$router.push({
        path: '/patient/diagnosis',
        query: {
          id: this.$route.query.id
        }
      })
    },
  }
};
</script>

<style lang="scss" scoped>
$grid-temp: 100px 120px 130px 150px 1fr;
$table-border: 1px solid #ccc;

.patientInfo {
  width: 100%;
  height: 100%;
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
    height: 100%;

    .wrapper-inner {
      border: $table-border;
      height: 100%;
    }

    .info-section {
      width: 900px;
      padding: 2rem 3rem;

      label {
        display: block;
        margin-bottom: .5rem;
        &:not(:first-child) {
          margin-top: 2rem;
        }
      }
    }

    .actionBtn {
      width: 90px;
      background: $color-3;
      border: none;
      img {
        width: 75%;
      }
    }

    .basic {
      border: .5px solid #ccc;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-right: .5rem;
    }
    
    .allergy {
      border: .5px solid #ccc;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      
    }
    
    .record {
      border: .5px solid #ccc;
      grid-template-columns: 1fr 1fr 1fr;

    }
    
    .label {
      text-align: center;
      background: $gray-1;
    }
    
    .col {
      border: .5px solid #ccc;
      padding: .5rem;
    }
  }
}
</style>
