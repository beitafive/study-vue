/*
 自定义指令的封装   效果 == v-if v-show
 * **/

const vHas = {
	install(Vue,options) {
		Vue.directive('has', {
			inserted: (el, data) => {
				if(!data.value) {
					for(let i in el.parentNode.children) {
						if(el.parentNode.children[i] == el) {
							el.index = i; //记录节点的下标
						}
					}
					el.parent = el.parentNode; //记录父节点
					el.isRemove = true; //表示update时，el已经被删除
					el.remove();
				}
			},
			update: (el, data) => {
				if(data.value) {
					if(el.isRemove) {
						el.parent.insertBefore(el, el.parent[el.index])
					}
				} else {
					if(!el.isRemove) {
						for(let i in el.parentNode.children) {
							if(el.parentNode.children[i] == el) {
								el.index = i; //记录节点的下标
							}
						}
						el.parent = el.parentNode; //记录父节点
						el.isRemove = true; //表示update时，el已经被删除
					}
					el.remove();
				}
			}
		})
	}
}
export default vHas;