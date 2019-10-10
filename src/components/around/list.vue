<template>
  <div class="around-box">
    <!-- 头部 -->
    <div class="around-header">
      <img src="../../static/img/around/aroundban.jpg" alt />
    </div>
    <!-- 内容 -->
    <div class="around-banner-box">
      <ul class="around-banner">
        <li class="around-banner-list" v-for="(item, index) in getListData" :key="index">
          <a href="javascript:;">
            <img :src="item.icon" alt />
            <p class="banner-list-title">{{item.subject}}</p>
            <div class="around-banner-list-box">
              <p class="banner-list-zhou">周边介绍：</p>
              <p class="banner-list-text">{{item.tags}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 分页器 -->
    <el-pagination layout="prev, pager, next" :total="10"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getListData: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/surrounding"
        )
        .then(res => {
          console.log(res.data.data);
          this.getListData = res.data.data.dataList;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
@import "../../static/css/around/list.css";
</style>