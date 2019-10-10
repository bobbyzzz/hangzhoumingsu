<template>
  <div class="login-box">
    <img class="login" src="../../static/img/login/login.jpg" alt />
    <div class="login-table">
      <div class="login-img">
        <img src="../../static/img/login/logo.png" alt />
      </div>
      <div class="login-tab">
        <div class="login-tab-login">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="手机注册" name="first">
              <div class="account-box">
                手机号
                <input v-model="userNames" type="text" placeholder="输入手机号或邮箱" />
              </div>
              <div class="verification-box">
                验证码
                <input v-model="securitys" type="text" maxlength="6" placeholder="输入验证码" />
                <button>短信获取</button>
              </div>
              <button class="button-box" @click="getToRegist">注册</button>
              <p class="button-login" @click="getTologin">登录</p>
            </el-tab-pane>
            <el-tab-pane label="邮箱注册" name="second">
              <div class="account-box">
                邮 箱
                <input v-model="email" type="text" placeholder="输入邮箱" />
              </div>
              <button class="button-box" @click="getToRegists">注册</button>
              <p class="button-login" @click="getTologin">登录</p>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      userNames: "",
      securitys: "",
      email: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getTologin() {
      this.$router.push("/user/login");
    },
    getToRegist() {
      if (this.userNames == "") {
        this.$message.error("请输入正确的账号");
      } else if (this.securitys == "") {
        this.$message.error("请输入正确的验证码");
      }
    },
    getToRegists() {
      if (this.email == "") {
        this.$message.error("请输入正确的邮箱号");
      }
    }
  },
  created() {}
};
</script>

<style scoped>
@import "../../static/css/user/regist.css";
</style>