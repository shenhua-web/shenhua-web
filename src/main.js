// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'moment/locale/zh-cn';
import $ from 'jquery';
import api from './api/index'
import requestUrl from './config/requestUrl'
// import './config/elementUi'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)


Vue.config.productionTip = false

Vue.use(ElementUI);
// 将API方法绑定到全局
Vue.prototype.$api = api



//引入公共头部
//组件
import HeaderComponent from './components/Header/HeaderComponent';
Vue.component('HeaderComponent',HeaderComponent)


if (process.env.NODE_ENV === 'production') {
  // 生产环境
  Vue.prototype.$pathUrl = requestUrl.production
}else if (process.env.NODE_ENV === 'development') {
  // 开发环境
  Vue.prototype.$pathUrl = requestUrl.development
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
