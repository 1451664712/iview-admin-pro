<style lang="scss">
  @import './login.scss';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import LoginForm from './logo_item';
  import {setToken} from "../../utils/auth";
  import {login} from '../../api';

  export default {
    components: {
      LoginForm
    },
    methods: {
      ...mapMutations(["setUserRegistry"]),
      handleSubmit({accountName, accountPasswd}) {
        login({accountName, accountPasswd}).then(res => {
          if (res.code == 200) {
            let token = res.result.token;
            let user_info = res.result.user;
            this.setUserRegistry(user_info);
            setToken(token)
            this.$router.push('home')
          }
        })
      }
    }
  }
</script>

<style>

</style>
