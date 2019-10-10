<template>
  <div class="forget-box">
    <img class="login" src="../../static/img/login/login.jpg" alt />
    <div class="login-table">
      <div class="login-img">
        <img src="../../static/img/login/logo.png" alt />
      </div>
      <div class="login-tab">
        <div class="login-tab-login">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="重置密码" name="first">
              <div class="account-box">
                账&nbsp;&nbsp;&nbsp;号
                <input v-model="phone" type="text" placeholder="输入手机号或邮箱" />
              </div>
              <div class="verification-box">
                图形码
                <input type="text" maxlength="4" v-model="inputInfo" placeholder="输入验证码" />
                <p class="code-style" @click="createCode">{{verificationCode}}</p>
              </div>
              <button class="button-box" @click="getForgets">下一步</button>
              <p class="forget-box">
                <span @click="getToregists">立即注册</span>
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
      inputInfo: "", //用户输入信息
      verificationCode: "", //生成的验证码
      phone: ""
    };
  },
  methods: {
    createCode() {
      //通过随机数生成验证码
      this.verificationCode = "";
      var code = "";
      var codeLength = 4; //验证码长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.verificationCode = code;
    },
    handleClick() {},
    getForgets() {
      //验证函数
      var customerCode = this.inputInfo.toUpperCase(); //把你输入的小写转化为大写
      if (this.phone == "") {
        this.$message.error("请输入正确的账号");
      } else if (customerCode == 0) {
        this.createCode();
        this.inputInfo = "";
        this.$message.error("请输入正确的验证码");
      } else if (customerCode != this.verificationCode) {
        this.createCode();
        this.inputInfo = "";
        this.$message.error("请输入正确的验证码");
      } else {
        this.$router.push("/user/login");
      }
    },
    getToregists() {
      this.$router.push("/user/regist");
    }
  },
  mounted() {
    this.createCode();
  }
};
</script>
<style scoped>
@import "../../static/css/user/forget.css";
</style>