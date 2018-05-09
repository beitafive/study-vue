<template>
	<div class="email">
		<input v-model="user_name" placeholder="请填写你的姓名"/>
		<input v-model="email" placeholder="请填写你的email"/>

		<button @click="submit"><w-loading v-has="send"></w-loading>提交 </button>
	</div>
</template>

<script>
	import wLoading from '@/components/loading/loading'
	export default{
		name:'email',
		data(){
			return{
				user_name:'',
				email:'',
				send:false
			}
		},
		components:{
			wLoading
		},
		methods:{
			submit(){
				this.send = true;
				this.$axios.post('/api/send/email',{
					user_name:this.user_name,
					email:this.email
				}).then((res)=>{
					console.log(res.data.name)
					this.send = false;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.email{
		input{
			border:1px solid #F5F5F5;
			padding:.2rem;
			width:80%;
			margin:.2rem 10%;
			border-radius:.1rem;
			&:focus{
				border-color:#3C3C3C;
			}
		}
		button{
			width:2rem;
			height:.7rem;
			background:#3D9BE8;
			border-radius: .1rem;
			color:#fff;
			margin:0 auto;
			display: block;
		}
	}
</style>