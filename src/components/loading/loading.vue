<template>
	<div class="box" @touchmove.prevent :style="{height:height,width:width}">
		<div class="text">{{text}}...</div>
		<div class="loader">
			<div class="loading">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		props:{
			text:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				width:'',
				height:''
			}
		},
		mounted(){
			if(this.$el.parentNode.style.position == ''){
				this.$el.parentNode.style.position = 'relative'
			}
			this.width = this.$el.parentNode.offsetWidth+'px';
			this.height = this.$el.parentNode.offsetHeight+'px';
		}
	}
</script>

<style scoped>
	.box {
		position: absolute;
		top:0;
		left:0;
		z-index:5000;
		background:rgba(0,0,0,.3);
		width: 100%;
		height:100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.loader {
		width: 100%;
		height: 100%;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		transform: scale(0.5)
	}
	
	@-webkit-keyframes loading {
		50% {
			transform: scale(0.4);
			opacity: 0.3;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	
	.loading {
		position: relative;
	}
	
	.loading span {
		display: block;
		width: .2rem;
		height: .2rem;
		border-radius: 100%;
		position: absolute;
		background: #333;
		z-index:5001
	}
	
	.loading span:nth-child(1) {
		top: .5rem;
		left: 0;
		-webkit-animation: loading 1s ease 0s infinite;
	}
	
	.loading span:nth-child(2) {
		top: .34rem;
		left: .34rem;
		-webkit-animation: loading 1s ease 0.12s infinite;
	}
	
	.loading span:nth-child(3) {
		top: 0;
		left: .5rem;
		-webkit-animation: loading 1s ease 0.24s infinite;
	}
	
	.loading span:nth-child(4) {
		top: -.34rem;
		left: .34rem;
		-webkit-animation: loading 1s ease 0.36s infinite;
	}
	
	.loading span:nth-child(5) {
		top: -.5rem;
		left: 0;
		-webkit-animation: loading 1s ease 0.48s infinite;
	}
	
	.loading span:nth-child(6) {
		top: -.34rem;
		left: -.34rem;
		-webkit-animation: loading 1s ease 0.6s infinite;
	}
	
	.loading span:nth-child(7) {
		top: 0;
		left: -.5rem;
		-webkit-animation: loading 1s ease 0.72s infinite;
	}
	
	.loading span:nth-child(8) {
		top: .34rem;
		left: -.34rem;
		-webkit-animation: loading 1s ease 0.84s infinite;
	}
	.text{
		position: absolute;
		top:7.6rem;
		width:100%;
		text-align: center;
		font-size:.24rem;
		color:#3c3c3c;
		z-index:5001;
	}
</style>