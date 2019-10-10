<template>
  <div class="video-box">
    <div class="fullBody">
      <img class="bannpic" src="http://www.hzminsu.cn/images/special/video_01.jpg" alt />
    </div>
    <div class="video">
      <div class="centerBody">
        <div class="minsuintro">
          <div class="minsuintrotit">一间民宿，一个故事</div>
          <div class="minsuinfo">
            <p>一场旅行，一场邂逅，去遇见不同的风景和人们，听一段带有欢笑声的故事。</p>
            <p>如果你只是住了民宿，却没有了解到民宿背后的故事，那将是一个大大的遗憾。</p>
            <p>在杭州，每一间民宿,都有一个故事。</p>
          </div>
        </div>
        <div class="clear">
          <div
            class="wrap"
            v-for="(item,index) in datalist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :key="index"
          >
            <div class="wrap-list">
              <img class="img" :src="item.picUrl" alt />

              <a :href="item.link">
                <img class="wrap-play" src="http://www.hzminsu.cn/images/index/redioSign.png" alt />
              </a>
              <div class="wrap-list-text">
                <h6>{{item.name}}</h6>
                <p>
                  <i class="el-icon-location-outline"></i>
                  {{item.hotelVo.address}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[9]"
        layout="prev, pager, next"
        :total="length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: "",
      activeName: "first",
      length: 0,
      currentPage: 1, //初始页
      pagesize: 9 //每页的数据
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/video"
        )
        .then(res => {
          this.datalist = res.data.data.dataList;
          this.length = res.data.data.dataList.length;
          console.log(res.data.data.dataList);
        });
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange(size) {
      // console.log(this.size)
      this.pagesize = size;
      // console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.currentPage = currentPage;
      // console.log(this.currentPage)  //点击第几页
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
@import "../../static/css/minsu/video.css";
</style>