import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '../components/index.vue'
import minsuList from '../components/minsu/list.vue'
import minsuVideo from '../components/minsu/video.vue'
import areaList from '../components/area/list.vue'
import aroundList from '../components/around/list.vue'
import hotnewsList from '../components/hotnews/list.vue'
import newsList from '../components/news/list.vue'
import newsPolicy from '../components/news/policy.vue'
import specialMsxh from '../components/special/msxh/index.vue'
import weekend from '../components/weekend/weekend.vue'
import newsDaren from '../components/news/daren.vue'
import talentList from '../components/talent/list.vue'
import projectpageList from '../components/projectpage/list.vue'
import login from '../components/user/login.vue'
import regist from '../components/user/regist.vue'
import forget from '../components/user/forget.vue'

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/minsu',
        redirect: '/minsu/list',
    },
    {
        path: '/minsu/list',
        component: minsuList,
        meta: {
            title: '特色民宿_杭州民宿网',
            keepAlive: false
        }
    },
    {
        path: '/minsu/video',
        component: minsuVideo,
        meta: {
            title: '杭州民宿网',
            keepAlive: false
        }
    },
    {
        path: '/minsu/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        },
        component: minsuList
    },
    {
        path: '/minsu/video',
        component: minsuVideo

    },
    {
        path: '/area',
        redirect: '/area/list',
    },
    {
        path: '/area/list',
        component: areaList,
        meta: {
            title: '精选目的地',
            keepAlive: false
        }
    },
    {
        path: '/area/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        },
        component: areaList
    },
    {
        path: '/around',
        redirect: '/around/list',
    },
    {
        path: '/around/list',
        component: aroundList,
        meta: {
            title: '民宿周边',
            keepAlive: false
        }
    },
    {
        path: '/around/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        },
        component: aroundList

    },
    {
        path: '/hotnews',
        redirect: '/hotnews/list',
    },
    {
        path: '/hotnews/list',

        component: hotnewsList,
        meta: {
            title: '热点专题',
            keepAlive: false
        }
    },
    {
        path: '/hotnews/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        },
        component: hotnewsList
    },
    {
        path: '/news',
        redirect: '/news/list',
    },
    {
        path: '/news/list',
        component: newsList,
        meta: {
            title: '民宿资讯',
            keepAlive: false
        }
    },
    {
        path: '/news/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/news/policy',
        component: newsPolicy,
        meta: {
            title: '行业政策',
            keepAlive: false
        }
    },
    {
        path: '/news/daren',
        component: newsDaren,
        meta: {
            title: '达人说',
            keepAlive: false
        },
        // component: newsDaren
    },
    {
        path: '/news/policy',
        component: newsPolicy
    },
    {
        path: '/news/daren',
        component: newsDaren
    },
    {
        path: '/special/msxh',
        redirect: '/special/msxh/index',
    },
    {
        path: '/special/msxh/index',
        component: specialMsxh,
        meta: {
            title: '民宿协会',
            keepAlive: false
        }
    },
    {
        path: '/weekend',
        redirect: '/weekend/weekend',
    },
    {
        path: '/weekend/weekend',
        component: weekend,
        meta: {
            title: '周末住哪_杭州民宿网',
            keepAlive: false
        }
    },
    {
        path: '/weekend/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/talent',
        redirect: '/talent/list',
    },
    {
        path: '/talent/list',
        component: talentList,
        meta: {
            title: '人才招聘',
            keepAlive: false
        }
    },
    {
        path: '/talent/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/projectpage',
        redirect: '/projectpage/list',
    },
    {
        path: '/projectpage/list',
        component: projectpageList,
        meta: {
            title: '项目招商',
            keepAlive: false
        }
    },
    {
        path: '/projectpage/index',
        component: index,
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/user',
        redirect: '/user/login',
    },
    {
        path: '/user/login',
        component: login,
        meta: {
            title: '杭州民宿网-账号密码登录',
            keepAlive: false
        }
    },
    {
        path: '/user',
        redirect: '/user/regist',
    },
    {
        path: '/user/regist',
        component: regist,
        meta: {
            title: '杭州民宿网-账号密码注册',
            keepAlive: false
        }
    },
    {
        path: '/user/forget',
        component: forget,
        meta: {
            title: '杭州民宿网-重置密码',
            keepAlive: false
        }
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})
export default router;