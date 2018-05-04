<template>
  <div id="app">
  	<transition name="fade">
	    <router-view/>
  	</transition>
  	<w-nav></w-nav>
  </div>
</template>

<script>
const wNav = ()=>import('@/components/nav/nav')
export default {
  name: 'App',
  data(){
  	return{
  		list:[1,2]
  	}
  },
  components:{
  	wNav
  }
}
</script>

<style>
#app{
	overflow: hidden;
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter{
  transform: translateX(1000px);
}
</style>
