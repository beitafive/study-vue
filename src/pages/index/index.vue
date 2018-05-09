<template>
	<div>
			<row-scroll :list="list" :typeIndex="typeIndex" @rowChange="checkCard" :config="config" box_id="rows" wrapper_id="rows-child"></row-scroll>
		<span v-has="typeIndex>5">首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页
			<span v-has="typeIndex>5">
				男衣','女衣','男裤','女裤','袜子','春夏款','秋冬款','爆款'
				<span v-has="typeIndex>5">
				男衣','女衣','男裤','女裤','袜子','春夏款','秋冬款','爆款'
				</span>
			</span>
		</span>
		
	</div>
</template>

<script>
	import rowScroll from '@/components/rowScroll/rowScroll'
	export default{
		name:'index',
		data(){
			return{
				list:['男衣','女衣','男裤','女裤','袜子','春夏款','秋冬款','爆款'],
				typeIndex:0,
				config:{
					scrollX:true,				//开启X滑动
					scrollY:false,				//关闭Y滑动
					preventDefault: false,
					tap:true,
					disableMouse: true,  		//禁止鼠标
    			disablePointer: true,		//禁止指针
    			momentum:false
				}
			}
		},
		components:{
			rowScroll
		},
		created(){
			this.typeIndex = +sessionStorage.item_index || 0;
		},
		methods:{
			checkCard(index){
				this.typeIndex = index;
				this.$axios.get('/api/index/getlist',{
					params:{
						index:index
					}
				}).then((res)=>{
//					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>