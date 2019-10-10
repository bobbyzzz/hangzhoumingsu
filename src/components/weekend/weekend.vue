<template>
  <div>
    <div class="centerBody conSpecialOffer">
      <p class="lmtitle">周末住哪</p>
      <ul class>
        <li v-for="(item, index) in dataList" :key="index">
          <a href="javascript:;">
            <div class="mainpic">
              <img class="zwfimg" src="http://www.hzminsu.cn/images/minsu/zwfimg43.png" />
              <img :src="item.hotelMainPicUrl" />
            </div>
            <p class="title">
              {{item.hotelSearchVo.name}}
              <img src="http://www.hzminsu.cn/images/minsu/youhui.png" />
            </p>
            <P class="address" title="富阳区常安镇杏梅坞村">{{item.hotelSearchVo.address}}</P>
            <P class="price">
              <i>￥</i>
              <span>{{item.hotelSearchVo.twoMaxPrice}}</span>起
            </P>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/weekends"
        )
        .then(res => {
          console.log(res.data);
          this.dataList = res.data.Data.dataList;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
@import "../../static/css/weekend/weekend.css";
</style>