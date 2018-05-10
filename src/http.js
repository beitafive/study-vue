/**
 * by beitafive
 * 
 * axios 拦截器
 * **/
import axios from 'axios'
import router from './router/index'
import store from './store/store'

var num = 0;
axios.interceptors.request.use(function (config) {  //在请求发出之前进行一些操作
	if(config.params.loading){
		store.dispatch('loading',true);
		num++		
	}
  return config
})
axios.interceptors.response.use(function(response){
	if(response.config.params.loading)num--;
	if(num <= 0){
		setTimeout(()=>{
			store.dispatch('loading',false)			
		},300)
	}
  if(response.status == 403){	// 一般就是未被服务器信任  也就是需要重新登录
  	router.push('/login') //去登录页
  }
  return response;
},function(err){
  //Do something with response error
  return Promise.reject(err);
});

/**
 * 为什么要封装这个方法呢？
 * 
 * url:正常的API地址
 * params:参数
 * load：判断是否页面加载中时的请求
 * **/
const http = {
	get:(url,params,load)=>{
		if(load){
			params = {...params,loading:1}
		}
		return axios.get(url,{
			params:params
		})
	},
	post:(url,params,load)=>{
		if(load){
			params = {...params,loading:1}
		}
		return axios.post(url,params)
	}
}

export default http;