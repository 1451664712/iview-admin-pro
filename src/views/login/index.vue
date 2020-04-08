<template>
  <div class="page-account">
    <div class="page-account-container">
      <div class="page-account-top">
        <h1 class="page-account-top-logo">
          <img src="../../assets/images/login_logo.png" alt="">
        </h1>
        <div class="page-account-top-desc">iView Admin Pro 数据质量评价/免费版</div>
      </div>
      <div class="login-container">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text"
                   v-model="formInline.user"
                   placeholder="Username">
              <!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
                    type="password"
                    v-model="formInline.password"
                    placeholder="Password">
              <!--<Icon type="ios-lock-outline" slot="prepend"></Icon>-->
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" size="large">Signin</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {
              type: 'string',
              min: 6,
              message: '密码至少为六位数',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$router.replace('/index')
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @media (min-width: 780px) {
    .page-account {
      background-image: url("https://file.iviewui.com/admin-pro-dist/img/body.8aa7c4a6.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 100%;
    }
  }

  .page-account {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;

    .page-account-container {
      flex: 1;
      margin: 0 auto;
      width: 384px;
      text-align: center;

      .page-account-top {
        padding: 32px 0;

        .page-account-top-logo {

          img {
            height: 75px;
          }
        }

        .page-account-top-desc {
          color: #808695;
          font-size: 14px;
        }


      }

      .login-container {

        button {
          width: 100%;
        }
      }
    }
  }
</style>
