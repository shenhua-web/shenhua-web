import config from './index'

let limit = config.urlPrefix
if (limit.length > 0){
  limit += '/'
}
//生产
const production = {

}

//开发
const development = {

}

export default {
  production,
  development
}