<template lang="pug">
  .login.flex-col.bg-pri
    .login__logo.flex.center-center
      img(:src="logo")
      .flex-col.center-center
        h2 市北公立醫院
        h5 SHIHPEI PUBLIC HOSPITAL
    .login__form.flex-col.bg-white
      .login__field.flex
        label 使用者代碼
        el-input(v-model="username")
      .login__field.flex
        label 使用者密碼
        el-input(type="password" v-model="password")
      span.forgot.pointer 忘記密碼?
      el-button.login__button.bg-btn(@click="handleLogin") 登入

    
</template>

<script>
import logo from '/src/assets/images/公立醫院Logo.png'
import Header from '@/components/Header'
import Progress from './Progress'

export default {
  data() {
    return {
      logo,
      username: '',
      password: ''
    };
  },
  components: {
    Header,
    Progress
  },
  methods: {
    handleLogin() {
      // 在這裡處理登錄邏輯
      console.log('Logging in with', this.username, this.password);
      // 成功後重定向到 Main 頁面
      this.$router.push('/main');
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  &__form {
    margin: 0 auto;
    align-items: stretch;
    width: 450px;
    padding: 48px 36px 36px;
    border-radius: .25rem;
  }

  &__field {
    margin-top: 1rem;
    align-items: center;
    label {
      margin-right: 1rem;
      white-space: nowrap;
    }
  }

  .forgot {
    margin-top: .5rem;
    font-size: 14px;
    align-self: flex-end;
    text-decoration: underline;
    opacity: .7;
  }

  &__button {
    width: 40%;
    align-self: center;
    margin-top: 24px;
  }

  &__logo {
    height: 150px;
    margin: 50px 0;
    color: #fff;
    img {
      height: 80%;
      margin-right: 1rem;
    }
    h2 {
      margin: 0 0 .5rem;
      font-size: 3rem;
    }
    h5 {
      font-size: 1.25rem;
      margin: 0;
    }
  }
}
</style>
