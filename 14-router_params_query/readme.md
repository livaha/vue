https://router.vuejs.org/api/#to



## `<router-link>` Props

### [#](https://router.vuejs.org/api/#to)to

- type: `string | Location`

- required

  Denotes the target route of the link. When clicked, the value of the `to` prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object.

  ```
  <!-- literal string -->
  <router-link to="home">Home</router-link>
  <!-- renders to -->
  <a href="home">Home</a>
  
  <!-- javascript expression using `v-bind` -->
  <router-link v-bind:to="'home'">Home</router-link>
  
  <!-- Omitting `v-bind` is fine, just as binding any other prop -->
  <router-link :to="'home'">Home</router-link>
  
  <!-- same as above -->
  <router-link :to="{ path: 'home' }">Home</router-link>
  
  <!-- named route -->
  <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
  
  <!-- with query, resulting in `/register?plan=private` -->
  <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
  ```





-------



//就是用to去链接你想要去的path，然后path带你去你要去的地方



query就是能在URL上显示的

params的参数如果想在URL上显示就用query实现

~~~
        <ul>列表2
            <li v-for="(hero,index) in heros" :key="index">
            {{hero.name}}
            <router-link :to="{name:'detail',params:{id:index}}">查看</router-link>
            </li>
        </ul>
~~~



