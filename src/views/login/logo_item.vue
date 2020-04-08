<template>
  <div class="login-container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="userName">
        <Input type="text"
               v-model="formInline.userName"
               placeholder="Username">
          <span slot="prepend"><Icon type="person"></Icon></span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
                type="password"
                v-model="formInline.password"
                placeholder="Password">
          <span slot="prepend"><Icon type="locked"></Icon></span>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" v-button>登 录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {encryptionReqext} from "../../utils/auth";

  export default {
    name: "index",
    data() {
      return {
        formInline: {
          userName: 'songziyu',
          password: 'songziyu'
        },
        ruleInline: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$emit('on-success-valid', {
              accountName: this.formInline.userName,
              accountPasswd: encryptionReqext(this.formInline.password)
            })
          } else {
            console.log('error  submit')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-container {
    /deep/ .ivu-input {
      height: 32px;
    }

    button {
      width: 100%;
    }
  }

  /deep/ .ivu-input-group-prepend {
    padding: 4px 10px;
  }
</style>
