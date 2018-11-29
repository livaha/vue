//1 引入 vue
import Vue from 'vue';
//2 引入app.vue，用来渲染render
import App from './app.vue';

//3 构建vue实例
new Vue({
	//渲染内容的地方
	el:'#app',
	//渲染内容
	render:function(c){//c只是一个形参
		return c(App)
	}
})