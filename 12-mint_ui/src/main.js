//引入vue
import Vue from 'vue';

//引入app.vue
import App from './app.vue';

//引入mint-ui
import MintUi from 'mint-ui';
//引入样式
import 'mint-ui/lib/style.css';
//安装插件
Vue.use(MintUi);


//new Vue
new Vue({
    el: '#app',
    render: c => c(App)
})