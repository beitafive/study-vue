import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/pages/index/index'
const index = ()=>import('@/pages/index/index')
const active = ()=>import('@/pages/active/active')
const shopcart = ()=>import('@/pages/shopcart/shopcart')
const mine = ()=>import('@/pages/mine/mine')

Vue.use(Router)

const	routes = [
  {path:'/',name:'index',component:index,meta:{title:'首页'}},
  {path:'/active',name:'active',component:active,meta:{title:'活动页'}},
  {path:'/shopcart',name:'shopcart',component:shopcart,meta:{title:'购物车'}},
  {path:'/mine',name:'mine',component:mine,meta:{title:'我的'}},
]

const router = new Router({
	mode:"history",
	routes
});

export default router;