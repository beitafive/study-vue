<template>
	<div class="shopcart">
		购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车购物车
		<input type="number" v-model="inputText" placeholder="请输入"  @focus="focus" @blur="blurs"/>
	</div>
</template>

<script>
	import keyBoard from '@/components/keyBoard/keyBoard'
	export default{
		name:'shopcart',
		data(){
			return{
				inputText:''
			}
		},
		methods:{
			focus(){
				console.log('focus')
//				this.inputText = '123'
			},
			blurs(){
				console.log('blur')
			}
		}
	}
</script>

<style>
</style>