// 配置API接口地址
//var root = '/api'
import router from '../router'
import myLoading from './loading'
var root = '';
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  root = ''
}
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  root = ''
}

// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}


// 请求拦截器
axios.interceptors.request.use((config) => {
  if(config.config.showLoading){
    myLoading.showFullScreenLoading()
  }
  return config
}, (error) => {
	myLoading.showFullScreenLoading()
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  if (response.config.config.showLoading) {
    myLoading.tryHideFullScreenLoading()
  }
  return response
}, (error) => {
  myLoading.tryHideFullScreenLoading()
  return Promise.reject(error)
})



//接口处理函数
function apiAxios (method, url, params, success, failure, config) {
  var baseURL = root;
  if (params) {
    params = filterNull(params)
  }

  if(undefined == config){
    config = {
      showLoading : true
    }
  }

  if (url && '/' == url[0]) {
    baseURL = '';
  }

  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: baseURL,
    config: config,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    withCredentials: true
  })
    .then(function (res) {
      if(200 === res.status){
        if("GET" === method && undefined == params.isJson){
          if(undefined != res.data.state ){
            if (success) {
              success(res.data)
            }
          }else{
            if (failure) {
              failure(res.data)
            } else {
              console.log('error: ' + JSON.stringify(res.data))
            }
          }
        }else{//post
          if(undefined != res.data.state && 0 == res.data.state){
            router.replace('/')
          }else{
            if (success) {
              success(res.data)
            }
          }
        }
      }else{
        if (failure) {
          failure(res.data)
        } else {
          console.log('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      console.log(err);
      let res = err.response
      if (err) {
        //console.log('api error, HTTP CODE: ' + res.status)
      }
    })
}



// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure, config) {
    return apiAxios('GET', url, params, success, failure, config)
  },
  post: function (url, params, success, failure, config) {
    return apiAxios('POST', url, params, success, failure, config)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
