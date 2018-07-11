<template>
	<div class="rowScroll" :id="box_id">
		<div :id="wrapper_id" class="row-iscroll" :style="{width:list.length*1.5+1+'rem'}">
			<div  v-for="(item,index) in list" :key="index" :style="{background:index==typeIndex?'red':''}" @click="showMe(index)">
				{{item}}
			</div>
		</div>
	</div>
</template>

<script>
	
	import Iscroll from 'iscroll';
	export default{
		name:'rowScroll',
		props:{
			list:{
				type:Array,
				default:[]
			},
			typeIndex:{
				type:Number,
				default:0
			},
			box_id:{
				type:String,
				default:'rows',
			},
			wrapper_id:{
				type:String,
				default:'rows-child',
			},
			config:{
				type:Object,
				default:{}
			}
		},
		/*
		 props 参数解析：
		 list  遍历的数组    Array
		 typeIndex 选中下标  Number
		 config  iscroll的初始化配置  Object
		 box_id 最外层ID  String   设置ID  是为了复用
		 wrapper_id  第二层ID  String 设置ID  是为了复用
		 * **/
		data(){
			return {
				Vscroll:''
			}
		},
		mounted(){
			var rows = document.getElementById(this.box_id)
			this.Vscroll = new Iscroll(rows,this.config)
			this.iscrollGo(this.typeIndex)
			this.$store.dispatch('getGlobalIndex',this.typeIndex)
		},
		methods:{
			showMe(index){
				var rows = document.getElementById(this.box_id)
				this.$emit('rowChange',index)
				this.iscrollGo(index)
				sessionStorage.item_index = index;
				this.$store.dispatch('getGlobalIndex',index).then(()=>{
					// do soming;
				})
			},
			iscrollGo(index=0){
				//首先获取父元素
				let uls = document.getElementById(this.wrapper_id);
				//获取子元素下标     
				let ind = index;
				//获取子元素     ****子元素也就是当前选中的标签
				let slide = uls.children[ind];
				//获取子元素的 offsetLeft
				let itemLeft = slide.offsetLeft;
				//获取子元素的真实宽度
				let itemWidth = slide.clientWidth;
				//获取一个宽度为100%的元素
				let wrap = document.getElementById(this.box_id);
				//获取屏幕宽度
				let wrapWidth = wrap.clientWidth;
				//计算子元素的中点位置
				let itemCenter = itemLeft + itemWidth / 2;
				//获取scroll最大距离
				let scrollMax = this.Vscroll.maxScrollX;
				console.log(this.Vscroll)
				//获取可滚动最大距离
				let maxTrans = -scrollMax + wrapWidth / 2;
				if(itemCenter < wrapWidth / 2){
					this.Vscroll.scrollTo(0,0,500);
				}else if(itemCenter > maxTrans){
					this.Vscroll.scrollTo(scrollMax,0,500);
				}else{
					let nowScrollX = itemCenter - wrapWidth / 2;
					this.Vscroll.scrollTo(-nowScrollX,0,500);
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.rowScroll{
		width:100%;
		height:.8rem;
		overflow-x:scroll;
		.row-iscroll{
			div{
				display: inline-block;
				width:1.5rem;
				height:100%;
				line-height:.8rem;
				text-align: center;
				transition: all .3s;
				background:#3D9BE8;
				margin:0 2px;
			}
		}
	}
	::-webkit-scrollbar {
		height:0;
	}
</style>