//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
//路由切换页面
import Music from './components/music.vue'
import Movie from './components/movie.vue'
import NotFound from './components/notFound.vue'

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter); //挂载属性

// 2. Define some routes
const routes = [       
    { name: 'music', path: '/music', component: Music },
    { name: 'music', path: '/music', component: Music },
    { path: '/', component: Movie },
    { path:'*',component:NotFound}

]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes
});

// 4. Create and mount the root instance.
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router, //可以简写router
    render: c => c(App),
})