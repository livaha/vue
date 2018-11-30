//引入vue
import Vue from 'vue';

//引入app.vue
import App from './app.vue';

import Home from './components/home.vue'
import VueRouter from 'vue-router'


  // 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
  // and then call `Vue.use(VueRouter)`.

  Vue.use(VueRouter)
  // 1. Define route components.
  // These can be imported from other files
  //经测试，这里需要从别的文件引入，如home.vue
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }

  // 2. Define some routes
  // Each route should map to a component. The "component" can
  // either be an actual component constructor created via
  // `Vue.extend()`, or just a component options object.
  // We'll talk about nested routes later.
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/home', component: Home }
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })
  
/*
//new Vue
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})*/

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  render: c => c(App)
}).$mount('#app')
