<template>
  <div id="app">
  	<transition name="fade">
	    <router-view class="app-view"/>
  	</transition>
  	<w-nav></w-nav>
  	<page-load v-has="loading"></page-load>
  </div>
</template>

<script>
const wNav = ()=>import('@/components/nav/nav')
import pageLoad from '@/components/loading/pageLoad'

export default {
  name: 'App',
  data(){
  	return{
  		list:[1,2]
  	}
  },
  computed:{
  	loading(){
  		return this.$store.getters.loading
  	}
  },
  components:{
  	wNav,pageLoad
  }
}
</script>

<style>
#app{
	width:100%;
	height:100%;
}
.app-view{
	box-sizing:border-box;
	padding-bottom:1rem;
}
.fade-enter-active{
  transition: all .5s ease;
}
.fade-enter{
  transform: translateX(1000px);
}
</style>
