<template>
	<div class="rowScroll" id="rows">
		<div v-for="(item,index) in list" :key="index" :style="{background:index==typeIndex?'red':''}" @click="showMe(index)">
			{{item}}
		</div>
	</div>
</template>

<script>
	import transfer from '@/assets/js/transfer';
	export default{
		name:'rowScroll',
		props:['list','typeIndex'],
		methods:{
			showMe(index){
				var rows = document.getElementById("rows")
				this.$emit('changeIndex',index)
				rows.scrollTo(event.target.offsetLeft,0)
			}
		}
	}
</script>

<style scoped>
	.rowScroll{
		width:100%;
		height:.8rem;
		white-space:nowrap;
		overflow-x: auto;
		overflow-y: hidden;
	}
	.rowScroll div{
		display: inline-block;
		width:1rem;
		height:100%;
		line-height:.8rem;
		text-align: center;
	}
	::-webkit-scrollbar {
		height:0;
	}
</style>