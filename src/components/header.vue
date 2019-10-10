<template>
  <div class="header">
    <div class="header_logo">
      <a href="index" target="_blank">
        <img src="../static/img/header/logo.png" alt />
      </a>
    </div>

    <div class="header_nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">乐享民宿</template>
          <el-menu-item index="/minsu/list">特色民宿</el-menu-item>
          <el-menu-item index="/weekend/weekend">周末住哪</el-menu-item>
          <el-menu-item index="/area/list">精选目的地</el-menu-item>
          <el-menu-item index="/minsu/video">民宿视频</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">主题精选</template>
          <el-menu-item index="/hotnews/list">热点专题</el-menu-item>
          <el-menu-item index="/around/list">民宿周边</el-menu-item>
          <el-menu-item>
            <a
              href="http://cdn.teemax.com.cn/hzminsu/special/cz2/mobile/index.html"
              target="_blank"
              style="color:white;"
            >电子杂志</a>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">行业动态</template>
          <el-menu-item index="/news/list">民宿资讯</el-menu-item>
          <el-menu-item index="/news/policy">行业政策</el-menu-item>
          <el-menu-item index="/talent/list">人才招聘</el-menu-item>
          <el-menu-item index="/projectpage/list">项目招商</el-menu-item>
        </el-submenu>

        <el-menu-item index="/news/daren">达人说</el-menu-item>
        <el-menu-item index="/special/msxh/index">民宿协会</el-menu-item>
      </el-menu>
    </div>

    <div class="header_user">
      <p>
        <img src="../static/img/header/search.png" alt />
      </p>
      <p>
        <span @click="getLogin">登录</span> |
        <span @click="getRegist">注册</span>
      </p>
      <p>
        <a href="http://www.minsuyun.com/" target="_blank">我要入驻</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    getLogin() {
      this.$router.push("/user/login");
    },
    getRegist() {
      this.$router.push("/user/regist");
    }
  },
  created() {}
};
</script>

<style scoped>
@import "../static/css/header.css";
</style>