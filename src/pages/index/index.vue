<template>
	<div>
		<!-- component 也可以当做组件标签，标签属性is来确定调用组件  -->
		<component is="rowScroll" :list="list" :typeIndex="typeIndex" @rowChange="checkCard" :config="config" box_id="rows" wrapper_id="rows-child"></component>
		<transition-group tag="div" name="list-go">
			<div v-for="item in list" :key="item">
				{{item}}
			</div>
		</transition-group>
		<div v-for="item in 10">
			<img v-lazy="item" >
		</div>
	</div>
</template>

<script>
	import {shuffle} from 'lodash';
	import rowScroll from '@/components/rowScroll/rowScroll'
	export default {
		name: 'index',
		data() {
			return {
				list: ['男衣', '女衣', '男裤', '女裤', '袜子', '春夏款', '秋冬款', '爆款'],
				typeIndex: 0,
				config: {
					scrollX: true, //开启X滑动
					scrollY: false, //关闭Y滑动
					preventDefault: false,
					tap: true,
					disableMouse: true, //禁止鼠标
					disablePointer: true, //禁止指针
					momentum: false
				}
			}
		},
		components: {
			rowScroll
		},
		beforeMount() {
			this.typeIndex = +sessionStorage.item_index || 0;
			this.$http.get('/api/index/getlist',{index:1},1).then((res)=>{
				console.log(res)
			})
		},
		methods: {
			checkCard(index) {
				this.list = shuffle(this.list)
				this.typeIndex = index;
			}
		}
	}
</script>

<style scoped>
	.list-go-move{
		transition:transform 1s;
	}
</style>