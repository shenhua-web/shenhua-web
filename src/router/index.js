import Vue from 'vue'
import Router from 'vue-router'


import NotFound from '@/page/404'
import Login from '@/page/login'
import Index from '@/page/index'  //预警概览
import Warn_detail from '@/page/warn_detail' //预警详情
import Warn_items from '@/page/warn_items' //预警条目
import Data_search from '@/page/data_search' //数据查询

Vue.use(Router)

export default new Router({
  routes: [
    //404页面
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/warn_detail',
      name: 'Warn_detail',
      component: Warn_detail,
    },
    {
      path: '/Warn_items',
      name: 'Warn_items',
      component: Warn_items,
    },
    {
      path: '/Data_search',
      name: 'Data_search',
      component: Data_search,
    }
  ]
})
