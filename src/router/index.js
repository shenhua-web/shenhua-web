import Vue from 'vue'
import Router from 'vue-router'


import NotFound from '@/page/404'
import Login from '@/page/login'
import Index from '@/page/index'

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
    }
  ]
})
