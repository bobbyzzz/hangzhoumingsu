<template>
  <div class="box">
    <div class="w">
      <!-- 轮播图盒子 -->
      <div class="slideBox">
        <!--图片的盒子-->
        <div class="imgBox">
          <a href v-for="(item_banner, index_banner) in banner" :key="index_banner">
            <div class="bacImg" :style="{backgroundImage:'url('+item_banner.picUrl+')'}">
              <div class="banner_title">
                <span>
                  {{item_banner.name}}
                  <i class="el-icon-arrow-right"></i>
                </span>
              </div>
            </div>
          </a>
        </div>
        <!-- 索引的盒子 -->
      </div>
      <!-- 目的地盒子 -->
      <div class="address">
        <h4>精选目的地</h4>
        <ul>
          <li>
            <a href>
              <div class="icon_img">
                <i class="icon_area"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 视频盒子 -->
      <div class="video">
        <h4>每一家民宿都是一本故事书</h4>
        <ul>
          <li v-for="(video_item, video_index) in videoImage" :key="video_index">
            <div class="video_img">
              <img :src="video_item.picUrl" alt />
              <a :href="video_item.link">
                <img class="wrap-play" src="http://www.hzminsu.cn/images/index/redioSign.png" alt />
              </a>
            </div>
            <p class="video_title1">{{video_item.name}}</p>
            <p>{{video_item.description}}</p>
          </li>
        </ul>
      </div>
      <!-- 精心推荐 -->
      <div class="forYou">
        <h4>为您精心推荐</h4>
        <ul>
          <li>
            <div class="li_l">
              <a href>
                <img
                  src="http://cdn2.dujiake.com/uploadfile/146729/146729_1610201608173104180.jpg"
                  alt
                />
              </a>
            </div>
            <div class="li_r">
              <p class="li_title">临安太湖源从前·慢民宿</p>
              <p
                class="li_content"
              >临安太湖源从前·慢民宿在临安大山里，龙须山下，一条长年不息的清溪边。这里空气质量长年优良，满山的山核桃树，蔚然壮观，再热的夏天，也没有一只蚊子，所以，这里也叫无蚊村。临安太湖源从前·慢民宿偏日式风格。院子里的游泳池，全年放满着山泉水。这里所有吃的、用的、游泳的、房间里的泡浴的，都是从高山上叮咚下来的泉水。每一个房间的阳台，放眼都是大山，所有房间安置水地暖，冬天到了，外面大雪纷飞，里面温暖如春。从前·慢，从前日色变得慢，一生只够爱一个人。</p>
              <a href class="more">查看详情</a>
            </div>
          </li>
          <li>
            <div class="li_l">
              <p class="li_title">临安太湖源从前·慢民宿</p>
              <p
                class="li_content"
              >临安太湖源从前·慢民宿在临安大山里，龙须山下，一条长年不息的清溪边。这里空气质量长年优良，满山的山核桃树，蔚然壮观，再热的夏天，也没有一只蚊子，所以，这里也叫无蚊村。临安太湖源从前·慢民宿偏日式风格。院子里的游泳池，全年放满着山泉水。这里所有吃的、用的、游泳的、房间里的泡浴的，都是从高山上叮咚下来的泉水。每一个房间的阳台，放眼都是大山，所有房间安置水地暖，冬天到了，外面大雪纷飞，里面温暖如春。从前·慢，从前日色变得慢，一生只够爱一个人。</p>
              <a href class="more">查看详情</a>
            </div>
            <div class="li_r">
              <a href>
                <img
                  src="http://cdn2.dujiake.com/uploadfile/180000/183160/183160_1612291418343373573.jpg"
                  alt
                />
              </a>
            </div>
          </li>
          <li>
            <div class="li_l">
              <a href>
                <img
                  src="http://cdn2.dujiake.com/uploadfile/146729/146729_1610201608173104180.jpg"
                  alt
                />
              </a>
            </div>
            <div class="li_r">
              <p class="li_title">临安太湖源从前·慢民宿</p>
              <p
                class="li_content"
              >临安太湖源从前·慢民宿在临安大山里，龙须山下，一条长年不息的清溪边。这里空气质量长年优良，满山的山核桃树，蔚然壮观，再热的夏天，也没有一只蚊子，所以，这里也叫无蚊村。临安太湖源从前·慢民宿偏日式风格。院子里的游泳池，全年放满着山泉水。这里所有吃的、用的、游泳的、房间里的泡浴的，都是从高山上叮咚下来的泉水。每一个房间的阳台，放眼都是大山，所有房间安置水地暖，冬天到了，外面大雪纷飞，里面温暖如春。从前·慢，从前日色变得慢，一生只够爱一个人。</p>
              <a href class="more">查看详情</a>
            </div>
          </li>
          <li>
            <div class="li_l">
              <p class="li_title">临安太湖源从前·慢民宿</p>
              <p
                class="li_content"
              >临安太湖源从前·慢民宿在临安大山里，龙须山下，一条长年不息的清溪边。这里空气质量长年优良，满山的山核桃树，蔚然壮观，再热的夏天，也没有一只蚊子，所以，这里也叫无蚊村。临安太湖源从前·慢民宿偏日式风格。院子里的游泳池，全年放满着山泉水。这里所有吃的、用的、游泳的、房间里的泡浴的，都是从高山上叮咚下来的泉水。每一个房间的阳台，放眼都是大山，所有房间安置水地暖，冬天到了，外面大雪纷飞，里面温暖如春。从前·慢，从前日色变得慢，一生只够爱一个人。</p>
              <a href class="more">查看详情</a>
            </div>
            <div class="li_r">
              <a href>
                <img
                  src="http://cdn2.dujiake.com/uploadfile/180000/183160/183160_1612291418343373573.jpg"
                  alt
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      videoImage: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/home"
        )
        .then(res => {
          // console.log(res.data);
          // 轮播图
          this.banner = res.data.dataList;
          // 视频
          this.video = res.data.videoList;
          console.log(this.video);
          // 视频图片
          for (let i = 0; i < 3; i++) {
            this.videoImage.push(this.video[i].hotelResourceVo);
          }
          console.log(this.videoImage);
        });
    },
    videourl(e) {
      console.log(e);
    }
  },
  created() {
    this.getData();
    this.videourl();
  }
};
</script>

<style scoped>
@import "../static/css/index.css";
</style>