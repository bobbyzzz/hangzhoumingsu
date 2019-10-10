import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './routers/index.js'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
import axios from 'axios'
// axios.defaults.baseURL = ''
Vue.prototype.$axios = axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')