<template>
  <div id="app">
  	<transition name="fade">
	    <router-view/>
  	</transition>
  	<w-nav></w-nav>
  	<page-load></page-load>
  </div>
</template>

<script>
const wNav = ()=>import('@/components/nav/nav')
const pageLoad = ()=>import('@/components/loading/pageLoad')
export default {
  name: 'App',
  data(){
  	return{
  		list:[1,2]
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
	overflow: hidden;
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter{
  transform: translateX(1000px);
}
</style>
