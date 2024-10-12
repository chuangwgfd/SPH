<template lang="pug">
  Layout
    .report
      .top-section 市北公立醫院 > 掛號作業｜日期：2025/1/20
      .tabs.flex
        .tab-item.pointer(v-for="(item, i) in tabs" :class="{ active: activeTab(i) }" @click="handleClickTab(i)") {{ item }}
        .tab-fake.flex-1.text-right
          span.pointer(@click="$router.push('/main')") 返回看診進度＞
      .main-section.flex
        .left-section.flex-col
          .info.flex-col
            span Patient ID: 2392803
            span Patient Name: Jingyi Hsu
            span Birth: 1999/07/08
            span [ Female ]
          
          SmallTable(title="報告日期" :list="reportDate" height="180px")
          SmallTable(title="X光檢驗報告" :list="xRay" height="220px")

        .middle-section
          .flex.align-center
            span {{ '> Photo' }}
            .col {{ photos[largeImageIndex].name }}
            span {{ 'Date' }}
            .col 2025/01/10
          .img-section.flex
            .main-img.flex-1
              img(:src="photos[largeImageIndex].src")
            .sub-imgs.flex-col.justify-between
              .img-wrapper
                img(:src="photos[smallImageIndices[0]].src" @click="swapImages(1)")
                .label {{ photos[smallImageIndices[0]].name }}
              .img-wrapper
                img(:src="photos[smallImageIndices[1]].src" @click="swapImages(2)")
                .label {{ photos[smallImageIndices[1]].name }}
        .right-section.flex-col
          SmallTable(title="癌細胞追蹤結果" :list="cell" height="220px")
          .metastasis
            .header Metastasis
            .body.flex-col
              template(v-for="item in metastasis")
                .flex.justify-between
                  span {{ item.label }}
                  span {{ item.value }} 
          button.download 下載報告結果
    
</template>

<script>
import Layout from '@/components/Layout.vue';
import SmallTable from '@/components/SmallTable.vue';
import img1 from '@/assets/images/photo-01.jpg'
import img2 from '@/assets/images/photo-02.jpg'
import img3 from '@/assets/images/photo-03.jpg'

export default {
  name: 'Report',
  components: {
    Layout,
    SmallTable
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
      reportDate: [
        '2024/05/30',
        '2024/07/16',
        '2024/08/20',
        '2024/09/15',
        '　',
        '　',
      ],
      xRay: [
        'Metastasis-1',
        'Metastasis-2',
        'Metastasis-3',
        '　',
        '　',
        '　',
        '　',
      ],
      cell: [
        'Cellresult001',
        'Cellresult002',
        'Cellresult003',
        'Cellresult004',
        '　',
        '　',
        '　',
        '　',
      ],
      photos: [
        { name: 'AXI T1 SE-C01', src: img1 },
        { name: 'AXI T1 SE-C02', src: img2 },
        { name: 'AXI T1 SE-C03', src: img3 },
      ],
      largeImageIndex: 0, // 大圖的索引
      smallImageIndices: [1, 2], // 小圖的索引
      metastasis: [
        { label: 'Lung', value: '22(20.8)' },
        { label: 'Brain', value: '31(29.2)' },
        { label: 'Strength', value: '0.0166' },
        { label: 'Liver', value: '14(13.2)' },
        { label: 'Adrenal gland', value: '0.0665' },
        { label: 'Others', value: '4(3.8)' },
      ]
    }
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
    swapImages(smallIndex) {
      // 確定要對調的小圖的索引
      const smallImageIndex = this.smallImageIndices[smallIndex - 1];

      // 對調大圖和小圖的索引
      [this.largeImageIndex, this.smallImageIndices[smallIndex - 1]] = 
        [smallImageIndex, this.largeImageIndex];
    },
  },
}
</script>

<style lang="scss" scoped>
  .report {
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
        text-decoration: underline;
        border-bottom: .5px solid #ccc;
      }
    }
    .main-section {
      background: $gray-3;
      padding: 1rem 1.5rem;
      gap: 1rem;

      .left-section {
        width: 180px;
        font-size: 18px;
        gap: 1rem;
        .info {
          font-size: 16px;
          gap: .5rem;
        }
      }
      .middle-section {
        flex: 1;
        background: $gray-1;
        padding: 1rem 1.5rem;
        .col {
          border: .5px solid #ccc;
          padding: 2px .5rem;
          background: #fff;
          margin: 0 .5rem;
        }
        .img-section {
          gap: 1rem;
        }
        .main-img {
          overflow: hidden;
        }
        .sub-imgs {
          width: 30%;
          .img-wrapper {
            position: relative;
            .label {
              position: absolute;
              bottom: 0;
              width: 100%;
              background: rgba($color-3, .9);
              color: #fff;
              padding: .5rem;
              text-align: center;
            }
          }
        }
        .img-3 {
          align-self: end;
        }
        img {
          border: 1px solid $color-1;
          object-fit: cover;
          // height: 100%;
          width: 100%;
        }
      }
      .right-section {
        width: 180px;
        gap: 1rem;
        .metastasis {
          border: 1px solid #ccc;
          .header {
            background: $gray-1;
            text-align: center;
            padding: .25rem;
          }
          .body {
            padding: .5rem;
            gap: .5rem;
            font-size: 14px;
          }
        }

        .download {
          background: $color-3;
          color: #fff;
          padding: .5rem 1rem;
          border: none;
        }
      }
    }
  }

</style>

