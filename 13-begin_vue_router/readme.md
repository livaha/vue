# 参考使用链接：

https://router.vuejs.org/installation.html#direct-download-cdn

https://router.vuejs.org/guide/#javascript



# Installation

## [#](https://router.vuejs.org/installation.html#direct-download-cdn)Direct Download / CDN

<https://unpkg.com/vue-router/dist/vue-router.js>

[Unpkg.com](https://unpkg.com/) provides npm-based CDN links. The above link will always point to the latest release on npm. You can also use a specific version/tag via URLs like `https://unpkg.com/vue-router@2.0.0/dist/vue-router.js`.

Include `vue-router` after Vue and it will install itself automatically:

```
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

## [#](https://router.vuejs.org/installation.html#npm)npm

```
npm install vue-router
```

When used with a module system, you must explicitly install the router via `Vue.use()`:

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

You don't need to do this when using global script tags.

## [#](https://router.vuejs.org/installation.html#dev-build)Dev Build

You will have to clone directly from GitHub and build `vue-router` yourself if you want to use the latest dev build.

```
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build
```





# Getting Started

Note

We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.

Also, all examples will be using the full version of Vue to make on-the-fly template compilation possible. See more details [here](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only).

Creating a Single-page Application with Vue + Vue Router is dead simple. With Vue.js, we are already composing our application with components. When adding Vue Router to the mix, all we need to do is map our components to the routes and let Vue Router know where to render them. Here's a basic example:

## [#](https://router.vuejs.org/guide/#html)HTML

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
```

## [#](https://router.vuejs.org/guide/#javascript)JavaScript

```
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
```

By injecting the router, we get access to it as `this.$router` as well as the current route as `this.$route` inside of any component:

```
// Home.vue
export default {
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
```

Throughout the docs, we will often use the `router` instance. Keep in mind that `this.$router` is exactly the same as using `router`. The reason we use `this.$router` is because we don't want to import the router in every single component that needs to manipulate routing.

You can also check out this example [live](https://jsfiddle.net/yyx990803/xgrjzsup/).

Notice that a `<router-link>` automatically gets the `.router-link-active` class when its target route is matched. You can learn more about it in its [API reference](https://router.vuejs.org/api/#router-link).