/**
 * by beitafive
 * 
 * axios 拦截器
 * **/
import axios from 'axios'

axios.interceptors.request.use(function(config){
	console.log(config)
  //在请求发出之前进行一些操作
  return config;
},function(err){
	console.log(err)
  //Do something with request error
  return Promise.reject(error);
});

export default axios;