<template>
	<div>
		<row-scroll :list="list" :typeIndex="typeIndex" @changeIndex="changeIndex"></row-scroll>
		首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页
	</div>
</template>

<script>
	import rowScroll from '@/components/rowScroll/rowScroll'
	export default{
		name:'index',
		data(){
			return{
				list:['男衣','女衣','男裤','女裤','袜子','春夏款','秋冬款','爆款'],
				typeIndex:0
			}
		},
		components:{
			rowScroll
		},
		methods:{
			changeIndex(index){
				this.typeIndex = index;
			}
		}
	}
</script>

<style>
</style>