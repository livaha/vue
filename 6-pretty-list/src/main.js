import Vue from 'vue'
import App from './app.vue'


//3:创建一个Vue的实例，一般一个项目，大多就是一个vue实例来完成显示
new Vue({
	el:'#app',
    // render:function(c){
    //     return c(App)
    // }
	render:c=>c(App)
    //1:当参数是一个的时候，小括号可以省略
    //2:当代码只有一行且是返回值的时候,可以省略大括号

})