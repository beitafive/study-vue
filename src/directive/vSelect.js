/*
 自定义指令的封装  
 点击选中某个元素内容
 默认是下一个子元素
 * **/

const vSelect = {
	install(Vue,options) {
		Vue.directive('select', {
			inserted: (el, binding) => {
				var nodes = '';
				if(binding.value){
					nodes = document.getElementById(binding.value.id)
				}else{
					nodes = el.nextSibling;
				}
				el.onclick = ()=>{
					if(nodes){
						var range = document.createRange();
		        window.getSelection().removeAllRanges(range);
		        range.selectNode(nodes);
		        window.getSelection().addRange(range);
					}else{
						return null;
					}
				}
			},
			unbind: (el,binding) => {
				el.onclick = undefined;
			}
		})
	}
}
export default vSelect;