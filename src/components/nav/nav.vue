<template>
	<div class="w-nav">
		<router-link tag="div" to="/" class="nav-item">
			<i class="iconfont">&#xe611;</i>
			首页
		</router-link>
		<router-link tag="div" to="/active" class="nav-item">
			<i class="iconfont">&#xe60a;</i>
			活动
		</router-link>
		<router-link tag="div" to="/shopcart" class="nav-item">
			<i class="iconfont">&#xe607;</i>
			购物车
			<span v-has="shopIndex>3">{{shopIndex}}</span>
		</router-link>
		<router-link tag="div" to="/mine" class="nav-item">
			<i class="iconfont">&#xe636;</i>
			我的
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'w-nav',
		props:{
			str:{
				type:String,
				default:'wuzhaoqian'
			}
		},
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			console.log(this)
		},
		computed:{
			shopIndex(){
				return this.$store.getters.getGlobalIndex;
			}
		}
	}
</script>

<style scoped lang="scss">
.w-nav{
	position:fixed;
	left:0;bottom:0;
	width:100%;
	height:1rem;
	display: flex;
	align-items:center;
	justify-content: space-around;
	background:#f5f5f5;
}
.nav-item{
	position:relative;
	display: flex;
	width:.8rem;
	margin-right:.1rem;
	height:100%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.nav-item i{
	font-size:.4rem;
	margin-bottom:.1rem
}
.router-link-exact-active{
	color:#3D9BE8
}
.nav-item span{
	display: block;
	position: absolute;
	top:0;right:0;
	width:.4rem;height:.4rem;
	border-radius:100%;
	background:#42B983;
	color:#fff;
	font-size:.24rem;
	text-align:center;
	line-height:.4rem;
}
</style>