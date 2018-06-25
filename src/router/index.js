import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/pages/index/index'
const index = ()=>import('@/pages/index/index')
const active = ()=>import('@/pages/active/active')
const shopcart = ()=>import('@/pages/shopcart/shopcart')
const mine = ()=>import('@/pages/mine/mine')
const email = ()=>import('@/pages/email/email')

Vue.use(Router)

const	routes = [
  {path:'/',name:'index',component:index,meta:{title:'首页',requireAuth:true}},
  {path:'/active',name:'active',component:active,meta:{title:'活动页'}},
  {path:'/shopcart',name:'shopcart',component:shopcart,meta:{title:'购物车'}},
  {path:'/mine',name:'mine',component:mine,meta:{title:'我的'}},
  {path:'/email',name:'email',component:email,meta:{title:'邮件'}},
]

const router = new Router({
	mode:"history",
	routes,
	base:'/app.html/',
	scrollBehavior (to, from, savedPosition) {
// 	if(to.name == 'shopcart'){
// 		return {x:0,y:100}
// 	}
 	} 
});
router.beforeEach((to,from,next)=>{
	//可以做登录拦截。 需要登录的路由后面加上requireAuth:true 就可以
	if(to.matched.some(r => r.meta.requireAuth)){
		
	}
//	document.title = to.meta.title
	next();
})

export default router;