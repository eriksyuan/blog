<template>
  <div class="register-content">
    <div class="register-box">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item v-bind="formItemLayout" label="邮箱">
          <a-input
            v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '请输入正确的邮箱',
              },
              {
                required: true,
                message: '请输入邮箱地址',
              },
            ],
          },
        ]"
            placeholder="Email"
          >
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="用户名">
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码">
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' },{validatoe:validateToNextPassword}] },
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="确认密码">
          <a-input
            v-decorator="[
          'confirmPassword',
          { rules: [{ required: true, message: '确认密码' },{validator:compareToFirstPassword}] },
        ]"
            type="password"
            placeholder="ConfirmPassword"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">Register</a-button>Or
          <!-- <a href>login now!</a> -->
          <nuxt-link to="/login">login now!</nuxt-link>
          <nuxt-link to="/" style="float:right"> home</nuxt-link>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { async } from "q";
export default {
  layout: "main",
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 }
        }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_register" });
  },
  methods: {
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("两次输入的密码不一致，请重新输入");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          let { password, confirmPassword, userName, email } = values;
          this.$axios
            .$post("/api/register", { userName, password, email })
            .then(res => {
              if (res.status !== 0) {
                this.$message.info(res.message);
                return;
              }
              this.$message.info("注册成功");
              setTimeout(() => {
                this.$router.push("/");
              }, 1500);
            });
        }
      });
    }
  }
};
</script>
<style lang="scss">
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.register-content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-box {
  max-width: 500px;
  width: 80%;
}
</style>