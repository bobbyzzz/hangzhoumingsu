<template>
  <div class="talent-box">
    <!-- 头部 -->
    <div class="topbanner">
      <div class="center">
        <div class="tit">
          <h5>人才招聘</h5>
          <p>在这里 发现你向往的生活~!</p>
        </div>
      </div>
    </div>
    <div class="centerBody">
      <div class="list">暂无内容！</div>
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
@import "../../static/css/talent/list.css";
</style>