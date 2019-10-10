<template>
  <div >
    <div class="fullBody drBanner">
      <img class="bannpic" src="http://www.hzminsu.cn/images/news/drBanner.jpg" />
    </div>
    <div class="fullBody">
      <div class="centerBody">
        <div class="swpBox">
          <img class="zwfImges" src="http://www.hzminsu.cn/images/zwf13_5.png" />
          <div class="swiper-container ghSwiper swiper-container-horizontal">
            <div class="swiper-wrapper js_swiper"></div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullBody drBox">
      <div class="centerBody">
        <ul class="dr_list">
          <li v-for="(item, index) in dataList" :key="index">
            <div class="zwfbox">
              <a href="#">
                <img class="zwfimg" src="http://www.hzminsu.cn/images/minsu/zwfimg95.png" alt />
                <img class="zwfpic" :src="item.userVo.middleIcon" />
              </a>
            </div>
            <div class="info">
              <div class="person clear">
                <div class="tx">
                  <img :src="item.userVo.smallIcon" alt />
                </div>
                <h6>{{item.userVo.nick}}</h6>
              </div>
              <p class="tit">{{item.subject}}</p>
              <div class="intro">{{item.tags}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="9"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList:''
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/says"
        )
        .then(res => {
          // console.log(res.data);
          this.dataList = res.data.data.dataList;
          // console.log(this.dataList);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
@import "../../static/css/news/daren.css";
</style>