import user from './user.component.js'
import company from './company.component.js'

//1.配置路由 -- 路由表
let router = new VueRouter({
	routes:[
		//切换路由就是切换组件
		{path:'/user',component:user},
		{path:'/company',component:company}
	]
})

//创建和挂载根实例
let vm = new Vue({
	el:'#div1',
	router
})
