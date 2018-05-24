<template>
	<div class="page-load">
		<img src="../../../static/jump.gif" />
		<p>加载中</p>
	</div>
</template>

<script>
	export default{
		name:'pageLoad'
	}
</script>

<style scoped lang="scss">
	.page-load{
		position: fixed;
		top:0;left:0;
		z-index:5000;
		width:100%;
		height:100%;
		background:#fff;
		img{
			display: block;
			margin:4rem auto .1rem;
		}
		p{
			text-align: center;
			color:#3c3c3c;
		}
	}
</style>