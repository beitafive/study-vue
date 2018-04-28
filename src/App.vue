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
  components:{
  	wNav
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
