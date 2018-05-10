// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http'
import vHas from './test'

Vue.prototype.$axios = axios;
Vue.use(vHas)
Vue.config.productionTip = false;
//自定义指令  效果同v-if v-show一样


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
