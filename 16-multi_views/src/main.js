import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/app.vue'
import headerVue from './components/header.vue'
import footerVue from './components/footer.vue'
import middleVue from './components/middle.vue'

Vue.use(VueRouter)

Vue.component('headerVue',headerVue)
Vue.component('footerVue',footerVue)

/*
const routes = [       
    { path: '/', component: Movie },
    { path:'*',component:NotFound}
]
*/
const routes =[
	{
		path:'/',
		components:{
			header:headerVue,
			footer:footerVue,
			default:middleVue
		}
	}
]

const router = new VueRouter({
	routes
})


//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router, //可以简写router
    render: c => c(App),
})