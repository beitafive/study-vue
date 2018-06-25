<template>
	<transition name="board">
		<div class="key-board" v-if="isShow">
			<div class="key-board-left">
				<span v-for="(item, index) in keyboard" key="index" @click.stop="connectStr(item)">{{item}}</span>
				<span class="iconfont" @click.stop="hideBoard">&#xe65a;</span>			
			</div>
			<div class="key-board-right">
				<span style="border-bottom:0.01rem solid #ccc;" @click.stop="connectStr()">删除</span>
				<span @click="confirm">确定</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				keyboard:['1','2','3','4','5','6','7','8','9','.','0']
			}
		},
		methods:{
			//拼接字符串
			connectStr(item){
				this.$emit('keyBoardup',item)
			},
			//隐藏键盘
			hideBoard(){
				this.$emit('hidekeyboard')
			},
			//确定按钮
			confirm(){
				this.$emit('confirm')
			}
		}
	}
</script>

<style scoped>
	/*
	 进出场动画
	 * */
	.board-enter-active,.board-leave-active{
	  transition: all .5s ease;
	}
	.board-enter{
	 	transform:translateY(800px);
	}
	.board-leave-to{
		transform:translateY(800px);
	}
	
	
	.key-board{
		position: absolute;
		left:0;
		bottom:0;
		z-index:999;
		background:#fff;
		width:100%;
		height:5rem;
	}
	.key-board-left {
		width: 5.89rem;
		height: 5rem;
		float: left;
	}
	
	.key-board-right {
		width: 1.61rem;
		height: 5rem;
		float: left;
		box-sizing: border-box;
		border-left: 0.01rem solid #ccc;
	}
	
	.key-board-right span {
		width: 1.61rem;
		height: 2.5rem;
		text-align: center;
		line-height: 2.5rem;
		display: block;
		font-size: 0.3rem;
		color: #8e8e8e;
	}
	
	.key-board-right span:nth-of-type(2) {
		background: #b29f74;
		color: #fff;
	}
	
	.key-board-left span {
		float: left;
		width: 1.96rem;
		height: 1.25rem;
		box-sizing: border-box;
		border-right: 0.01rem solid #ddd;
		border-bottom: 0.01rem solid #ddd;
		text-align: center;
		line-height: 1.25rem;
		font-size: 0.5rem;
	}
	
	.key-board-left .iconfont {
		font-size: 0.4rem;
	}
</style>