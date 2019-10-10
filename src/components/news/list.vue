<template>
  <div class="lists-box">
    <!-- 头部 -->
    <div class="topbanner">
      <div class="center">
        <div class="tit">
          <h5>行业政策</h5>
          <p>做既标准化又个性化的民宿~！</p>
        </div>
      </div>
    </div>
    <div class="fullBody">
      <div class="centerBody">
        <el-tabs  v-model="activeName" type="card" @tab-click="handleClick" class="tab1" >
          <el-tab-pane label="全部" name="first">
            <div class="list" v-for="(item,index) in datalist1.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
              <div class="item">
                <div class="imgWrap">
                  <a href="#">"
                    <img class="zwfpic" :src="item.icon" />
                  </a>
                </div>
                <div class="info">
                  <h3>
                    <a href="#">{{item.subject}}</a>
                  </h3>
                  <div class="con">
                    <p>{{item.categoryVo.name}}</P>
                    
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
         
          </el-tab-pane>
          <el-tab-pane label="最新资讯" name="second" >
             <div class="list" v-for="(item,index) in datalist2.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
              <div class="item">
                <div class="imgWrap">
                  <a href="#">
                    <img class="zwfpic" :src="item.icon" />
                  </a>
                </div>
                <div class="info">
                  <h3>
                    <a href="#">{{item.subject}}</a>
                  </h3>
                  <div class="con">
                    <p>{{item.categoryVo.name}}</P>
                    
                  </div>
                  <div class="bottoms">
                    <span>
                      发表人：
                      <i></i>
                    </span>
                    <span>
                      发表时间：
                      <i>2019-8-30</i>
                    </span>
                    <a class="getMore" href="#">了解详情</a>
                  </div>
                </div>
              </div>
            </div>
            
          </el-tab-pane>
          <el-tab-pane label="热点资讯" name="third">
             <div class="list" v-for="(item,index) in datalist3.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
              <div class="item">
                <div class="imgWrap">
                  <a href="#">
                    <img class="zwfpic" :src="item.icon" />
                  </a>
                </div>
                <div class="info">
                  <h3>
                    <a href="#">{{item.subject}}</a>
                  </h3>
                  <div class="con">
                    <p>{{item.categoryVo.name}}</P>
                    
                  </div>
                  <div class="bottoms">
                    <span>
                      发表人：
                      <i></i>
                    </span>
                    <span>
                      发表时间：
                      <i>2018-1-17</i>
                    </span>
                    <a class="getMore" href="#">了解详情</a>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
         
      </div>
      <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[9]" 
                            layout="prev, pager, next"
                            :total="length">    
                    </el-pagination>
    </div>  
 </div>
</template>

<script>

export default {
  data() {
    return {
      datalist2: '',
      datalist1:'',
      datalist3:'',
      length: 0,
      activeName: "first",
      currentPage:1, //初始页
      pagesize:9,    //每页的数据
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://mock.yonyoucloud.com/mock/2158/information"
        )
        .then(res => {
          this.datalist2 = res.data.data.dataList[1]; 
         this.length = res.data.data.dataList[0].length
         this.datalist1 = res.data.data.dataList[0]
         this.datalist3 = res.data.data.dataList[2]
          // console.log(res.data.data.dataList);
        });
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
   
    // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange(size) {
          // console.log(this.size)
                this.pagesize = size;
                // console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange(currentPage){
          console.log(currentPage)
                this.currentPage = currentPage;
                // console.log(this.currentPage)  //点击第几页
        },

  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>

@import "../../static/css/news/list.css";
</style>