<template>
  <div class="minsu_list_box">

    <!-- 时间和民宿名搜素框 -->
    <div class="minsu_list_time">
      <form action="" method="get">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期" name='startDay'>
            </el-date-picker>
          </div>
  
          <div class="block">
          <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions" name='endDay'>
          </el-date-picker>
          </div>

          <el-input v-model="input" placeholder="您要找的民宿名或地区" name='nameArea'></el-input>
          <button type="submit" class="minsu_list_time_submit"><img src="../../static/img/header/search.png" alt=""></button>
      </form>
    </div>

    <div class="minsu_list_content">
    <div class="w">
      <div class="minsu_list_main">

        <!-- 民宿地区 -->
        <div class="minsu_list_info">          
          <div class="minsu_list_info_area">
            <ul>
              <li>
              <p>地区：</p>
              <p @click='getData()'><router-link to="">不限</router-link></p>
              <p @click='getData()'>
                <!-- <a href="?minsuInfo=hangzhou">杭州</a> -->
                <router-link to='?minsuInfo=hangzhou'>杭州</router-link>
                </p>
              <p @click='getData()'><router-link to='?minsuInfo=tonglu'>桐庐县</router-link></p>
              <p @click='getData()'><router-link to="?minsuInfo=jiande">建德市</router-link></p>
              </li>
              <li>
              <p>房间：</p>
              <p @click='getData()'><router-link to="">不限</router-link></p>
              <p @click='getData()'><router-link to="?minsuInfo=danren">单人</router-link></p>
              <p @click='getData()'><router-link to="?minsuInfo=shuangren">双人间</router-link></p>
              </li>
              <li>
              <p>价格：</p>
              <p @click='getData()'><router-link to="">不限</router-link></p>
              <p @click='getData()'><router-link to="?minsuInfo=300">300元以下</router-link></p>
              <p @click='getData()'><router-link to="?minsuInfo=500">300~500元</router-link></p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 民宿信息 -->
        <div class="minsu_list_details">
          <p class="minsu_list_details_title">共搜到462家</p>
          <div class="minsu_list_details_content">
            <!-- <ul v-for="(features_item,features_index) in this.features" :key="features_index" v-show="features_index>=(pageContentNum*(pageCurrent-pageCurrent)) && features_index<=(pageContentNum*pageCurrent-pageCurrent)"> -->
            <ul v-for="(features_item,features_parent_index) in this.features.slice(features_index_start,features_index_end)" :key="features_parent_index">
            <!-- 分页算法：index>=pageContentNum*(pageCurrent-pageCurrent) and index<=pageContentNum*pageCurrent-pageCurrent -->
              <li class="minsu_list_details_content_li">
                <div class="minsu_list_details_content_box">
                  <div class="minsu_list_details_content_box_brief">
                    
                    <div class="minsu_list_details_content_box_brief_img">
                      <a href="javascript:;"><img :src="features_item.hotelReducePo.picVoList[0].urlPath" alt=""></a>
                      <p></p>
                    </div>
                                        
                    <div class="minsu_list_details_content_box_brief_words">
                      <a href="javascript:;">
                      <p class="words_title">{{features_item.name}}<span class="coupon">券</span></p>                
                      <p class="addressIcon"></p>
                      <p class="address">{{features_item.address}}</p>                     
                      <ul>
                        <li v-for="(features_item,features_index) in features_item.hotelReducePo.hotelSellpointVoList" :key="features_index"><img src="../../static/img/minsu/list/detail-icon-01.png" alt="">{{features_item.content}}</li>
                      </ul>      
                      </a>              
                    </div>

                    <div class="priceAccess">
                      <a href="javascript:;">
                        <p>
                        <span>{{features_item.minPrice}}</span>
                        <span>起</span></p>
                        <p>共{{features_item.hotelReducePo.hotelStatVo.viewNum}}人访问</p>
                      </a>     
                    </div>
                    
                  </div>

                  <!-- 显示更多房间 -->
                  <div class="minsu_list_details_content_box_specs">
                    <ul>
                      <div class="minsu_list_details_content_box_specs_title">
                        <p>房型</p>
                        <p>床位</p>
                        <p>早餐</p>
                        <p>宽带</p>
                        <p>退改规定</p>
                        <p>价格</p>
                        <p class="moreRoom_button_hide" @click="active[features_parent_index].name=!active[features_parent_index].name" v-show="!active[features_parent_index].name"><img src="../../static/img/minsu/list/moer.png" alt=""></p>
                      </div>

                      <div>
                         
                      <li v-for="(features_item,features_index) in features_item.hotelReducePo.roomtypeVoList.slice(0,3)" :key="features_index">
                        <div>
                        <p>{{features_item.name}}</p>
                        <p>{{features_item.bedNum}}</p>
                        <!-- <p v-if="features_item.hasBreakfast=='Y'?breakfast='有':breakfast='无'">{{breakfast}}</p> -->
                        <p>{{features_item.breakFast}}</p>
                        <p>有</p>
                        <p>不可退改</p>
                        <p><span>￥{{features_item.inventoryPrice}}</span><span>起</span></p>
                        <p><a href="javascript:;"><span>预订</span></a></p>
                        </div>
                      </li>                         
                      </div>

                      <div>
                      <li v-show="!active[features_parent_index].name" v-for="(features_item,features_index) in features_item.hotelReducePo.roomtypeVoList.slice(3)" :key="features_index">
                        <div>
                        <p>{{features_item.name}}</p>
                        <p>{{features_item.bedNum}}</p>
                        <!-- <p v-if="features_item.hasBreakfast=='Y'?breakfast='有':breakfast='无'">{{breakfast}}</p> -->
                        <p>{{features_item.breakFast}}</p>
                        <p>有</p>
                        <p>不可退改</p>
                        <!-- <p v-if="features_item.minInventoryPrice==null?inventoryPrice=features[features_parent_index].minPrice:inventoryPrice=features_item.minInventoryPrice"><span>￥{{inventoryPrice}}</span><span>起</span></p> -->
                        <p><span>￥{{features_item.inventoryPrice}}</span><span>起</span></p>
                        <p><a href="javascript:;"><span>预订</span></a></p>
                        </div>
                      </li>   
                      </div>  
                        
                    </ul>
                    <div class="minsu_list_details_content_box_moreRoom" v-show="active[features_parent_index].name" v-if="features[features_parent_index].hotelReducePo.roomtypeVoList.length>=4">
                      <div class="moreRoom_button_show" @click="fixActive(features_parent_index)">
                      <p>显示更多房间</p>
                      <p><img src="../../static/img/minsu/list/moer.png" alt=""></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

          <!-- 分页-->         
          <div class="minsu_list_page">
            <div class="block">
            <el-pagination
            background            
            layout="prev, pager, next"
            :total="10" @current-change="page()" ref="currentPage">
            </el-pagination>
            </div>
          </div>

      </div>

      <!-- 右侧栏内容 -->
      <div class="minsu_list_sidebar">

        <!-- 民宿问答 -->
        <div class="minsu_list_ask">
          <div class="minsu_list_ask_title">
            <div><p>?</p></div>
            <div><p>民宿问答</p></div>
          </div>
          
          <div class="minsu_list_ask_content">            
            <ul>
              <vue-seamless-scroll :class-option="defaultOption" :data="listData" class="seamless_warp">
              <li v-for="(item, index) in listData" :key='index'>
               <p><span></span>{{item.title}}</p>
               <p>{{item.data}}</p>
              </li>
              </vue-seamless-scroll>
            </ul>            
          </div>
        </div>  

        <!-- 热门推荐 -->
        <div class="minsu_list_hot">
          <div class="minsu_list_hot_title">
            <p>热门推荐</p>
          </div>

          <div class="minsu_list_hot_content">
            <ul>
              <li>
                <router-link to=''>
                <div>
                  <p><img src="../../static/img/minsu/list/159434_1611111123572515130.jpg" alt=""></p>
                  <p>券</p>
                  <p>临安山田半亩民宿</p>
                  <p><span>临安区太湖源镇白沙</span></p>
                  <p>
                    <span>￥</span>
                    <span class="minsu_list_hot_content_price">380</span>
                    <span>起</span>
                  </p>
                </div>
                </router-link>
              </li>

              <li>
                <router-link to=''>
                <div>
                  <p><img src="../../static/img/minsu/list/159434_1611111123572515130.jpg" alt=""></p>
                  <p>券</p>
                  <p>临安山田半亩民宿</p>
                  <p><span>临安区太湖源镇白沙</span></p>
                  <p>
                    <span>￥</span>
                    <span class="minsu_list_hot_content_price">380</span>
                    <span>起</span>
                  </p>
                </div>
                </router-link>
              </li>
              <li>
                <router-link to=''>
                <div>
                  <p><img src="../../static/img/minsu/list/159434_1611111123572515130.jpg" alt=""></p>
                  <p>券</p>
                  <p>临安山田半亩民宿</p>
                  <p><span>临安区太湖源镇白沙</span></p>
                  <p>
                    <span>￥</span>
                    <span class="minsu_list_hot_content_price">380</span>
                    <span>起</span>
                  </p>
                </div>
                </router-link>
              </li>
              <li>
                <router-link to=''>
                <div>
                  <p><img src="../../static/img/minsu/list/159434_1611111123572515130.jpg" alt=""></p>
                  <p>券</p>
                  <p>临安山田半亩民宿</p>
                  <p><span>临安区太湖源镇白沙</span></p>
                  <p>
                    <span>￥</span>
                    <span class="minsu_list_hot_content_price">380</span>
                    <span>起</span>
                  </p>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>      
      </div>


    </div>
    </div>
  </div>
</template>

<script>
// import features_json from './features.json'
// import features_hangzhou_json from './features_hangzhou.json'
// import features_jiande_json from './features_jiande.json'
// import features_tonglu_json from './features_tonglu.json'
// import features_danren_json from './features_danren.json'
// import features_shuangren_json from './features_shuangren.json'
// import features_300_json from './features_300.json'
// import features_500_json from './features_500.json'

export default {
  data() {
    return {
        value1: '',
        value2: '',     
        input: '',    
        active:[], 
        pickerOptions:'',
        pageCurrent:1,
        pageContentNum:10,
        // features:features_json.dataList.dataList,
        // features_hangzhou:features_hangzhou_json.dataList.dataList,
        // features_jiande:features_jiande_json.dataList.dataList,
        // features_tonglu:features_tonglu_json.dataList.dataList,
        // features_danren:features_danren_json.dataList.dataList,
        // features_shuangren:features_shuangren_json.dataList.dataList,
        // features_300:features_300_json.dataList.dataList,
        // features_500:features_500_json.dataList.dataList,
        features:[],
        featuresData:'',
        features_index_start:0,
        features_index_end:10,
        inventoryPrice:'',
        listData: [{
        'title': '西湖周边民宿离西湖有多远？',
        'data': '西湖周边民宿集中在四眼井、满觉陇、白乐桥、茅家埠、玉皇山一带，通常步行5—20分钟~',
          }, {
        'title': '住民宿需要提前预定吗？',
        'data': '大多数民宿在周末和节假日都是满房，工作日稍微空闲一些，所以想要入住民宿，要根据时间适当提前预定哦~',
         }, {
        'title': '哪些民宿适合一家人一起住？',
        'data': '有许多民宿设有家庭房，此外，全家人出行，杭州周边地区民宿也是很不错的选择~',
        }, {
        'title': '为什么民宿价格不同时间不一样？',
        'data': '民宿经营也分淡旺季，大多数民宿会根据入住情况实时调整价格~',
        }, {
        'title': '住民宿怎么解决吃饭问题？',
        'data': '杭州市区内每个民宿群周边都有餐厅，杭州周边地区大多数民宿都是含餐饮的哦~',
        }, {
        'title': '去杭州住民宿，交通方便吗？',
        'data': '杭州市区民宿集中在景区及周边，公交能到达，作为互联网发展先驱的杭州，打车也是非常方便滴~',
        },{
        'title': '西湖周边民宿离西湖有多远？',
        'data': '西湖周边民宿集中在四眼井、满觉陇、白乐桥、茅家埠、玉皇山一带，通常步行5—20分钟~',
          }, {
        'title': '住民宿需要提前预定吗？',
        'data': '大多数民宿在周末和节假日都是满房，工作日稍微空闲一些，所以想要入住民宿，要根据时间适当提前预定哦~',
         }, {
        'title': '哪些民宿适合一家人一起住？',
        'data': '有许多民宿设有家庭房，此外，全家人出行，杭州周边地区民宿也是很不错的选择~',
        }, {
        'title': '为什么民宿价格不同时间不一样？',
        'data': '民宿经营也分淡旺季，大多数民宿会根据入住情况实时调整价格~',
        }, {
        'title': '住民宿怎么解决吃饭问题？',
        'data': '杭州市区内每个民宿群周边都有餐厅，杭州周边地区大多数民宿都是含餐饮的哦~',
        }, {
        'title': '去杭州住民宿，交通方便吗？',
        'data': '杭州市区民宿集中在景区及周边，公交能到达，作为互联网发展先驱的杭州，打车也是非常方便滴~',
        },]
    }
  },
  methods: {
    getData(){
      if(this.$route.query.minsuInfo=='' || this.$route.query.minsuInfo==undefined||this.$route.query.minsuInfo==null){
      this.$axios.get('https://mock.yonyoucloud.com/mock/2158/features').then(res=>{
      this.features=res.data.dataList.dataList

      this.active=[]
      for(let i=0;i<this.features.length;i++){
        this.active.push({name:true})              
      }
      // console.log(this.active)  
      // console.log(this.features)

      for(let j=0;j<this.features.length;j++){
        for(let k=0;k<this.features[j].hotelReducePo.roomtypeVoList.length;k++){
            if(this.features[j].hotelReducePo.roomtypeVoList[k].hasBreakfast=='Y'){
            this.features[j].hotelReducePo.roomtypeVoList[k].breakFast='有'
            }
            if(this.features[j].hotelReducePo.roomtypeVoList[k].hasBreakfast!='Y'){
            this.features[j].hotelReducePo.roomtypeVoList[k].breakFast='无'
            }
          
            if(this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice==null){
            this.features[j].hotelReducePo.roomtypeVoList[k].inventoryPrice=this.features[j].minPrice
            }
            if(this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice!=null){
            this.features[j].hotelReducePo.roomtypeVoList[k].inventoryPrice=this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice
            }            
        }
      }
      // console.log(this.features)
      })
       

      }else{
      this.$axios.get('https://mock.yonyoucloud.com/mock/2158/features/'+this.$route.query.minsuInfo).then(res=>{
      this.features=res.data.dataList.dataList

        this.active=[]
        for(let i=0;i<this.features.length;i++){
          this.active.push({name:true})              
        }
        // console.log(this.active)   

      for(let j=0;j<this.features.length;j++){
        for(let k=0;k<this.features[j].hotelReducePo.roomtypeVoList.length;k++){
            if(this.features[j].hotelReducePo.roomtypeVoList[k].hasBreakfast=='Y'){
            this.features[j].hotelReducePo.roomtypeVoList[k].breakFast='有'
            }
            if(this.features[j].hotelReducePo.roomtypeVoList[k].hasBreakfast!='Y'){
            this.features[j].hotelReducePo.roomtypeVoList[k].breakFast='无'
            }
          
            if(this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice==null){
            this.features[j].hotelReducePo.roomtypeVoList[k].inventoryPrice=this.features[j].minPrice
            }
            if(this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice!=null){
            this.features[j].hotelReducePo.roomtypeVoList[k].inventoryPrice=this.features[j].hotelReducePo.roomtypeVoList[k].minInventoryPrice
            }            
        }
      }     
        // console.log(this.features)    
      })
      
      
      }
      
    },
    minsuInfoUrl(){
      // console.log(this.$route.query.minsuInfo)

      if(this.$route.query.minsuInfo=='hangzhou'){
        this.features=this.features_hangzhou
      }else if(this.$route.query.minsuInfo=='jiande'){
        this.features=this.features_jiande
      }else if(this.$route.query.minsuInfo=='tonglu'){
        this.features=this.features_tonglu
      }else if(this.$route.query.minsuInfo=='danren'){
        this.features=this.features_danren
      }else if(this.$route.query.minsuInfo=='shuangren'){
        this.features=this.features_shuangren
      }else if(this.$route.query.minsuInfo=='300'){
        this.features=this.features_300
      }else if(this.$route.query.minsuInfo=='500'){
        this.features=this.features_500
      }

      // this.features_index_start=0
      // this.features_index_end=10
      // this.pageCurrent=1   

      // console.log(this.features)    
      // for(let i=1;i<document.getElementsByClassName('el-pager')[0].children.length;i++){  
      //    document.getElementsByClassName('el-pager')[0].children[i].className='number'    
      // }
      // document.getElementsByClassName('el-pager')[0].children[0].className='number active'
     
    },
    page(){
      this.pageCurrent=this.$refs.currentPage.$data.internalCurrentPage
      // 获取当前页数
      // console.log(this.pageCurrent)
      // console.log(this.pageContentNum)
      this.features_index_start=this.pageContentNum*(this.pageCurrent-1)
      this.features_index_end=this.pageContentNum*this.pageCurrent
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    fixActive(index){
      this.active[index].name=false
    },
  },
computed: {
    defaultOption () {
      return {
        step: 0.6, 
        limitMoveNum: 12,
        hoverStop: true, 
        direction: 1, 
        openWatch: true, 
        singleHeight: 0, 
        singleWidth: 0, 
        waitTime: 1000
      }
    }
  },
  created(){
    this.getData()    
  }
}
</script>

<style scoped>
@import '../../static/css/minsu/list.css';
</style>