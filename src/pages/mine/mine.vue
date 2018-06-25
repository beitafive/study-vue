<template>
	<div class="mine" ref="wrapper">
		<div class="wapper">
			<div v-for="item in 100">
				{{item}}
			</div>
			<input type="text" />
			
		</div>
	</div>
</template>

<script>
	import bScroll from 'better-scroll'
	export default{
		name:'mine',
		data(){
			return{
				bScroll:{}
			}
		},
		mounted(){
			setTimeout(()=>{
				this.scrollInit();
				console.log(this.bScroll.enabled)
			},50)
		},
		methods:{
			scrollInit(){
				this.bScroll = new bScroll(this.$refs.wrapper,{
					scrollbar:true,
					pullDownRefresh: {
					  threshold: 50,
					  stop: 20
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.mine{
		height:100%;
		input{
			border:1px solid #000000;
		}
	}
</style>