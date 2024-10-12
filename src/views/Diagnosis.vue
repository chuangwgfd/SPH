<template lang="pug">
  Layout
    .diagnosis
      .top-section 市北公立醫院 > 掛號作業｜日期：2025/1/20
      .tabs.flex
        .tab-item.pointer(v-for="(item, i) in tabs" :class="{ active: activeTab(i) }" @click="handleClickTab(i)") {{ item }}
        .tab-fake.flex-1.text-right
      .main-section.flex
        .flex-col
          .base-info.grid
            template(v-for="item in infoCol")
              .label.col.text-center {{ item.label }}
              .col {{ patientData[item.key] }}
          .diagnosis-info
            .flex.align-center
              .datetime 看診日期
              .col {{ patientData.datetime }}
              .insurance 健保狀態
              .col {{ patientData.insurance }}
            .input-section
              .flex
                .label.text-center 主訴
                textarea.flex-1
              .flex
                .label.text-center 醫囑
                textarea.flex-1 {{ patientData.doctor_order }}
              .flex
                .label.text-center 診斷
                .diagnosis-record.grid
                  .col(v-for="item in patientData.diagnosis") {{ item }}
            .drug-table.grid
              .label.col.text-center 編號
              .label.col.text-center 藥品處置名稱
              .label.col.text-center 次量
              .label.col.text-center 天數
              .label.col.text-center 總量
              .label.col.text-center 用法說明
              template(v-for="obj in patientData.drug")
                template(v-for="(item, key) in obj")
                  .cell(:class="{ 'text-center': key === 'num' || key === 'days' || key === 'usage', 'text-right': key === 'per_mount' || key === 'total_mount' }") {{ item }}

        RightTable
          .back.pointer(@click="$router.push('/main')") 返回看診進度＞
    
</template>

<script>
import RightTable from '@/components/RightTable.vue';
import Layout from '@/components/Layout.vue';
export default {
  name: 'Diagnosis',
  components: {
    Layout,
    RightTable
  },
  data() {
    return {
      tabs: [
        'F1 病歷首頁',
        'F2 掛號進度',
        'F3 報告查看',
        'F4 看診作業',
        'F5 藥物庫存',
      ],
      infoCol: [
        { label:'姓名', key: 'name' },
        { label:'身分證號碼', key: 'national_id' },
        { label:'病歷號碼', key: 'id' },
        { label:'出生日期', key: 'birth' },
        { label:'性別', key: 'gender' },
        { label:'IC註記', key: 'insurance' },
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
          datetime: '2025/1/20 11:05',
          doctor_order: '病人之疾病對於現在治療有良好緩解，因腫瘤之標準葡萄糖最大攝取值低，右側肺門淋巴結沒有\n發現腫瘤轉移，本次檢查沒有發現其他異常葡萄糖聚積的地方。',
          diagnosis: [
            'ICD58:041',
            '消化不良及其他胃功能障礙',
            'ISPA過敏',
            'ICD45:068',
            'ROS1基因異常',
            '',
            '　',
            '　',
            '　',
          ],
          drug: [
            { num: '520843', name: 'Bevacizumab', per_mount: '0.50', days: '7', total_mount: '7.00', usage: '1天3次' },
            { num: '650362', name: 'Erlotinib', per_mount: '0.50', days: '7', total_mount: '7.00', usage: '1天2次' },
            { num: '　', name: '', per_mount: '', days: '', total_mount: '', usage: '' },
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
          datetime: '2025/1/20 13:20',
          doctor_order: '病人因確診口腔癌需進行腫瘤切除手術以及口腔重建術，進行右側頸清掃皮瓣修補手術。',
          diagnosis: [
            'ICD33:026',
            '頰粘膜惡性腫瘤',
            '',
            'ICD33:054',
            '口腔癌合併右側頸部轉移',
            '',
            '　',
            '',
            '',
          ],
          drug: [
            { num: '306826', name: 'Alloponinal', per_mount: '0.50', days: '3', total_mount: '3.00', usage: '1天3次' },
            { num: '　', name: '', per_mount: '', days: '', total_mount: '', usage: '' },
            { num: '　', name: '', per_mount: '', days: '', total_mount: '', usage: '' },
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
          datetime: '2025/3/3 09:20',
          doctor_order: '',
          diagnosis: [
            'ICD:R030',
            '血壓上升，非診斷為高血壓者',
            '',
            'ICD23:R14',
            '胃腸脹氣及相關病況',
            '',
            '　',
            '',
            '',
          ],
          drug: [
            { num: '532640', name: 'Lansoprazole', per_mount: '0.50', days: '3', total_mount: '3.00', usage: '1天3次' },
            { num: '440318', name: 'Carvedilol', per_mount: '0.50', days: '3', total_mount: '3.00', usage: '1天3次' },
            { num: '　', name: '', per_mount: '', days: '', total_mount: '', usage: '' },
          ]
        },
      ]
    }
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
    activeTab(i) {
      let path = this.$route.path
      if (i === 2 && path === '/patient/report') return true
      if (i === 3 && path === '/patient/diagnosis') return true
    },
    handleClickTab(i) {
      let id = this.$route.query.id;
      let path = this.$route.path
      if (id !== '2392803') return
      if (i === 2 && path !== '/patient/report') this.$router.push({
        path: '/patient/report',
        query: {
          id: this.$route.query.id
        }
      })
      if (i === 3 && path !== '/patient/diagnosis') this.$router.push({
        path: '/patient/diagnosis',
        query: {
          id: this.$route.query.id
        }
      })

    },
  },
}
</script>

<style lang="scss" scoped>
  .diagnosis {
    .top-section {
      font-size: 14px;
      font-weight: 500;
      background: $color-1;
      color: #fff;
      padding: .5rem 1.5rem;
    }
    .tabs {
      background: $gray-3;
      .tab-item {
        background: #E6E6E6;
        padding: .5rem 1.75rem;
        border: .5px solid #ccc;
        &.active {
          background: $gray-3;
          border-bottom: none;
        }
        &:hover {
          font-weight: bold;
        }
      }
      .tab-fake {
        padding: .75rem 10% 0 0;
        border-bottom: .5px solid #ccc;
      }
    }
    .back {
      position: absolute;
      top: -45px;
      right: 0;
      text-decoration: underline;
    }
    .main-section {
      .rightTable {
        position: relative;
      }
      background: $gray-3;
      padding: 1rem 1.5rem;
      gap: 1rem;
      &>:first-child {
        width: 800px;
      }
      .base-info {
        border: .5px solid #ccc;
        grid-template-columns: 100px 1fr 100px 1fr 100px 1fr;
        margin-right: .5rem;
        margin-bottom: .75rem;
        .label {
          &.col {
            background: $gray-1;
          }
        }
        
      }
      .col {
        border: .5px solid #ccc;
        padding: .5rem;
        background: #fff;
      }
      .diagnosis-info {
        >.flex {
          gap: .5rem;
        }
        .input-section {
          width: 100%;
          >.flex {
            height: 100px;
            border: 1px solid #ccc;
            &+.flex {
              margin-top: .5rem;
            }
          }
          .label {
            width: 40px;
            padding: 1.75rem .5rem;
          } 
          textarea {
            padding: .5rem;
            font-size: 1rem;
            border: none;
            border-color: #ccc;
            color: #666;
            resize: none;
          }
          &>:nth-child(1) {
            .label {
              background: $color-blue;
            }
          }
          &>:nth-child(2) {
            .label {
              background: $color-yellow;
            }
          }
          &>:nth-child(3) {
            .label {
              background: $color-red;
            }
          }
        }

        .diagnosis-record {
          width: 100%;
          grid-template-columns: 1fr 2.5fr 1fr;
          .col {
            padding: .25rem 1rem;
          }
        }

        .drug-table {
          margin-top: .5rem;
          grid-template-columns: 1fr 2.5fr 1fr 60px 1fr 2.5fr;
          .label {
            background: $gray-2;
            font-weight: bold;
          }
          .cell {
            padding: .25rem .75rem;
            border: .5px solid #ccc;
            background: rgba(#fff, .5);
          }
        }
      }
    }

    
  }

</style>

