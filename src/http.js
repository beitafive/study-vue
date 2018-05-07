/**
 * by beitafive
 * 
 * axios 拦截器
 * **/
import axios from 'axios'
import router from './router/index'
axios.interceptors.response.use(function(response){
  //请求返回之后
  if(response.status == 403){	// 一般就是未被服务器信任  也就是需要重新登录
  	router.push('/login') //去登录页
  }
  return response;
},function(err){
	console.log(err)
  //Do something with response error
  return Promise.reject(error);
});

export default axios;