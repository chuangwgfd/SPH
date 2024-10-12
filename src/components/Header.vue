<template lang="pug">
  .header.flex.bg-header
    .header__logo.flex.pointer(@click="$router.push('/')")
      img(:src="logo")
      .flex-col.center-center
        h2 市北公立醫院
        h5 SHIHPEI PUBLIC HOSPITAL
      
    el-menu.menu(
      default-active="2"
      mode="horizontal"
    )
      template(v-for="(item, i) in menus")
        el-menu-item(:key="i" :index="`${i+1}`" @click="$router.push('/main')") {{ item.label }}

</template>

<script>
import logo from '@/assets/images/公立醫院Logo.png'
export default {
  name: 'Header',
  data() {
    return {
      logo,
      menus: [
        { label: '部門科別' },
        { label: '病歷管理' },
        { label: '門診科別' },
        { label: '刀房資訊' },
        { label: '設備管理' },
        { label: '系統設定' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    height: 128px;
    padding: 1.5rem 2.5rem 0;
    
    &__logo {
      height: 85px;
      flex-grow: 1;
      // margin-right: 100px;
      white-space: nowrap;
      img {
        height: 100%;
        margin-right: 1rem;
      }
      h2, h5 {
        color: $color-3;
      }
      h2 {
        margin: 0 0 .1rem;
        font-size: 2rem;
      }
      h5 {
        font-size: .9rem;
        margin: 0;
      }
    }

    .menu {
      flex-basis: 800px;
      align-self: flex-end;
    }
  }
</style>