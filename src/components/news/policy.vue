<template>
  <div class="policy-box">
    <!-- 头部 -->
    <div class="topbanner">
      <div class="center">
        <div class="tit">
          <h5>行业政策</h5>
          <p>做既标准化又个性化的民宿~！</p>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="fullBody">
      <div class="centerBody">
        <div class="list">
          <div class="item">
            <div class="imgWrap">
              <a href>
                <img
                  class="zwfpic"
                  src="http://cdn2.teemax.com.cn/hzminsu/appfile/article/pic/1906101538555696267.jpg"
                />
              </a>
            </div>
            <div class="info">
              <h3>
                <a href="detail.html?id=010001">今年前5个月河南民宿建设引进品牌近百家</a>
              </h3>
              <div class="con">
                <p>风格别致的民宿正成为河南旅游一道靓丽的风景线。昨日，记者从河南省文化和旅游厅了解到，截至今年5月底，全省共引进品牌民宿近百家，投资约50亿元，在大别山、伏牛山、太行山的44个村整村推进民宿。</p>

                <p>在学习浙江、云南等地民宿发展经验的基础上，结合全省生态旅游资源和民宿旅游资源调查成果，省文化和旅游厅理出了“生态旅游抓</p>
              </div>
              <div class="bottoms">
                <span>
                  发表人：
                  <i></i>
                </span>
                <span>
                  发表时间：
                  <i>2019-6-10</i>
                </span>
                <a class="getMore" href="#">了解详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination class="pagination" layout="prev, pager, next" :total="1"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@import "../../static/css/news/policy.css";
</style>