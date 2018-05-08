/**
 * by beitafive
 * 兄弟组件通讯
 * 第三方  中转站
 **/
import Vue from 'vue';

const vues = new Vue();

export default vues;

/**
 * 使用方法
 * 在对应的两个组件中引入本文件
 * 组件a：
 * vues.$emit('change',params)
 * 组件b：
 * 在钩子函数中
 * vues.$on('change',()=>{
 * 	
 * })
 * **/