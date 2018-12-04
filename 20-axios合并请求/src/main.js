//引入一堆
import Vue from 'vue';
//主体
import App from './components/app.vue';

//引入
import Axios from 'axios';

Axios.defaults.baseURL = 'http://127.0.0.1:8899';


//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

//new Vue 启动
new Vue({
    el: '#app',
    render: c => c(App),
})

//npm run server之前 先打开服务器程序 ：node server.js  