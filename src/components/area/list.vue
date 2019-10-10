<template>
  <div class="area-box">
    <div class="fullBody des topbanner">
      <div class="center">
        <div class="tit">
          <h5>精选目的地</h5>
          <p>总有一间是你喜欢的~！</p>
        </div>
      </div>
    </div>
    <div class="fullBody des">
      <div class="centerBody">
        <div class="des_tab js_des_tab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="西湖" name="first">
              <div class="des_list js_des_listdes_list js_des_list">
                <div class="item" v-for="(item, index) in list[0]" :key="index">
                  <a href="#">
                    <div class="imgWrap">
                      <!-- <img :src="item.hotelMainPicUrl" alt=""> -->
                      <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg53.png" />
                      <img class="zwfpic" :src="item.hotelMainPicUrl" />
                    </div>
                    <div class="info">
                      <h3>
                        {{item.hotelSearchVo.name}}
                        <span class="price">
                          ￥
                          <i>{{item.hotelSearchVo.minPrice}}</i>
                          起
                        </span>
                      </h3>
                      <div class="coneome">
                        <div class="portrait">
                          <img
                            class="zwfpic"
                            src="http://www.hzminsu.cn/images/minsu/user_photo.png"
                          />
                        </div>
                        <div class="intro">
                          <h5>{{item.hotelCommentVoList[0].uname}}</h5>
                          <div class="txt">
                            <P>{{item.hotelCommentVoList[0].content}}</P>
                          </div>
                          <ul class="imglist">
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[0].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[1].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[2].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[3].urlPath" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="萧山" name="second">
              <div class="des_list js_des_listdes_list js_des_list">
                <div class="item" v-for="(item, index) in list[1]" :key="index">
                  <a href="#">
                    <div class="imgWrap">
                      <!-- <img :src="item.hotelMainPicUrl" alt=""> -->
                      <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg53.png" />
                      <img class="zwfpic" :src="item.hotelMainPicUrl" />
                    </div>
                    <div class="info">
                      <h3>
                        {{item.hotelSearchVo.name}}
                        <span class="price">
                          ￥
                          <i>{{item.hotelSearchVo.minPrice}}</i>
                          起
                        </span>
                      </h3>
                      <div class="coneome">
                        <div class="portrait">
                          <img
                            class="zwfpic"
                            src="http://www.hzminsu.cn/images/minsu/user_photo.png"
                          />
                        </div>
                        <div class="intro">
                          <h5>{{item.hotelCommentVoList[0].uname}}</h5>
                          <div class="txt">
                            <P>{{item.hotelCommentVoList[0].content}}</P>
                          </div>

                          <ul class="imglist">
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[0].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[1].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[2].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[3].urlPath" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="余杭" name="third">
              <div class="des_list js_des_listdes_list js_des_list">
                <div class="item" v-for="(item, index) in list[2]" :key="index">
                  <a href="#">
                    <div class="imgWrap">
                      <!-- <img :src="item.hotelMainPicUrl" alt=""> -->
                      <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg53.png" />
                      <img class="zwfpic" :src="item.hotelMainPicUrl" />
                    </div>
                    <div class="info">
                      <h3>
                        {{item.hotelSearchVo.name}}
                        <span class="price">
                          ￥
                          <i>{{item.hotelSearchVo.minPrice}}</i>
                          起
                        </span>
                      </h3>
                      <div class="coneome">
                        <div class="portrait">
                          <img
                            class="zwfpic"
                            src="http://www.hzminsu.cn/images/minsu/user_photo.png"
                          />
                        </div>
                        <div class="intro">
                          <h5>{{item.hotelCommentVoList[0].uname}}</h5>
                          <div class="txt">
                            <P>{{item.hotelCommentVoList[0].content}}</P>
                          </div>
                          <ul class="imglist">
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[0].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[1].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[2].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[3].urlPath" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="淳安" name="fourth">
              <div class="des_list js_des_listdes_list js_des_list">
                <div class="item" v-for="(item, index) in list[3]" :key="index">
                  <a href="#">
                    <div class="imgWrap">
                      <!-- <img :src="item.hotelMainPicUrl" alt=""> -->
                      <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg53.png" />
                      <img class="zwfpic" :src="item.hotelMainPicUrl" />
                    </div>
                    <div class="info">
                      <h3>
                        {{item.hotelSearchVo.name}}
                        <span class="price">
                          ￥
                          <i>{{item.hotelSearchVo.minPrice}}</i>
                          起
                        </span>
                      </h3>
                      <div class="coneome">
                        <div class="portrait">
                          <img
                            class="zwfpic"
                            src="http://www.hzminsu.cn/images/minsu/user_photo.png"
                          />
                        </div>
                        <div class="intro">
                          <h5>{{item.hotelCommentVoList[0].uname}}</h5>
                          <div class="txt">
                            <P>{{item.hotelCommentVoList[0].content}}</P>
                          </div>
                          <ul class="imglist">
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[0].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[1].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[2].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[3].urlPath" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="临安" name="Ling">
              <div class="des_list js_des_listdes_list js_des_list">
                <div class="item" v-for="(item, index) in list[4]" :key="index">
                  <a href="#/">
                    <div class="imgWrap">
                      <!-- <img :src="item.hotelMainPicUrl" alt=""> -->
                      <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg53.png" />
                      <img class="zwfpic" :src="item.hotelMainPicUrl" />
                    </div>
                    <div class="info">
                      <h3>
                        {{item.hotelSearchVo.name}}
                        <span class="price">
                          ￥
                          <i>{{item.hotelSearchVo.minPrice}}</i>
                          起
                        </span>
                      </h3>
                      <div class="coneome">
                        <div class="portrait">
                          <img
                            class="zwfpic"
                            src="http://www.hzminsu.cn/images/minsu/user_photo.png"
                          />
                        </div>
                        <div class="intro">
                          <h5>{{item.hotelCommentVoList[0].uname}}</h5>
                          <div class="txt">
                            <P>{{item.hotelCommentVoList[0].content}}</P>
                          </div>
                          <ul class="imglist">
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[0].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[1].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[2].urlPath" />
                            </li>
                            <li>
                              <img class="zwfimg" src="http://www.hzminsu.cn/images/zwfimg11.png" />
                              <img class="zwfpic" :src="item.hotelPicVoList[3].urlPath" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
      list: "",
      //  list: true
      list: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/destination"
        )
        .then(res => {
          console.log(res);
          console.log(res.data.Data.dataList);
          this.list = res.data.Data.dataList;
          // console.log(this.dataList);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
@import "../../static/css/area/list.css";
</style>