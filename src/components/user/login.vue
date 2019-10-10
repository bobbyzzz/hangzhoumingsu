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
            <el-tab-pane label="账号密码登录" name="first">
              <div class="account-box">
                账&nbsp;&nbsp;&nbsp;号
                <input v-model="userName" type="text" placeholder="输入手机号或邮箱" />
              </div>
              <div class="password-box">
                密&nbsp;&nbsp;&nbsp;码
                <input
                  :type="pwdType"
                  @on-change="userPassword"
                  placeholder="输入密码"
                  v-model="passWord"
                />
                <img :src="seen?openeye:nopeneye" class="eye" alt @click="changeType()" />
              </div>
              <button class="button-box" @click="confirmTheCode">登录</button>
              <p class="forget-box">
                <span @click="getForget">忘记密码</span>
                <span @click="getToRegist">立即注册</span>
              </p>
            </el-tab-pane>
            <el-tab-pane label="验证码登录" name="second">
              <div class="account-box">
                手机号
                <input v-model="userName1" type="text" placeholder="输入手机号或邮箱" />
              </div>
              <div class="verification-box">
                验证码
                <input v-model="security" type="text" maxlength="6" placeholder="输入验证码" />
                <button>短信获取</button>
              </div>
              <button class="button-box" @click="confirmTheCodes">登录</button>
              <p class="forget-box">
                <span @click="getForget">忘记密码</span>
                <span @click="getToRegist">立即注册</span>
              </p>
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
      seen: "",
      pwdType: "password", // 密码类型
      openeye: require("../../static/img/login/colse_eyes.png"), //图片地址
      nopeneye: require("../../static/img/login/open_eyes.png"), //图片地址
      userPassword: "",
      userName: "",
      passWord: "",
      userName1: "",
      security: ""
    };
  },
  methods: {
    handleClick() {
      // console.log(tab, event);
    },
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.seen = !this.seen; //小眼睛的变化
    },
    getToRegist() {
      this.$router.push("/user/regist");
    },
    confirmTheCode() {
      //获取本地存储的数据
      // var userData = JSON.parse(localStorage.getItem("account") || '[]')
      // console.log(userData[0])
      if (this.userName == "") {
        this.$message.error("请输入正确的账号");
      } else if (this.passWord == "") {
        this.$message.error("请输入正确的密码");
      }
    },
    confirmTheCodes() {
      if (this.userName1 == "") {
        this.$message.error("请输入正确的账号");
      } else if (this.security == "") {
        this.$message.error("请输入正确的验证码");
      }
    },
    getForget() {
      this.$router.push("/user/forget");
    }
  },
  created() {}
};
</script>

<style scoped>
@import "../../static/css/user/login.css";
</style>