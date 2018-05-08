// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
//自定义指令  效果同v-if v-show一样
Vue.directive('has',{
	inserted:(el,data)=>{	
		if(!data.value){
			for(let i in el.parentNode.children){
				if(el.parentNode.children[i] == el){
					el.index = i;   //记录节点的下标
				}
			}
			el.parent = el.parentNode; //记录父节点
			el.isRemove = true;		//表示update时，el已经被删除
			el.remove();
		}
	},
	update:(el,data)=>{
		if(data.value){
			if(el.isRemove){
				el.parent.insertBefore(el,el.parent[el.index])				
			}
		}else{
			if(!el.isRemove){
				for(let i in el.parentNode.children){
					if(el.parentNode.children[i] == el){
						el.index = i;	//记录节点的下标
					}
				}
				el.parent = el.parentNode;	//记录父节点
				el.isRemove = true;		//表示update时，el已经被删除
			}
			el.remove();
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
