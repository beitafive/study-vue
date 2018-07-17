// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import http from './http'
import vHas from './directive/vhas'
import VueLazyLoad from 'vue-lazyload'
Vue.prototype.$http = http;
Vue.mixin({
	created:function(){	
		if(this.$route.meta.title){
			document.title = this.$route.meta.title;			
		}
	}
})
Vue.use(VueLazyLoad,{
	loading:'./static/loading.png',
	error:'./static/loading.png'
})
Vue.use(vHas)
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
