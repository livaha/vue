过滤器是option的一个属性，
`<template>
    <div>

        请输入内容
        <input type="text" name="" v-model="text">
        显示：{{text | myFilter}}
        
        <!-- 测试组件的范围 -->
        <sub-vue></sub-vue>

    </div>
</template>
<script>
  import subVue from './components/sub.vue'
  export default{
    data(){
      return{
        text:''
      }
    },
    filters:{
      myFilter:function(value){
        //就是-> text
        //输入的内容帮我做一个反转
        //转换成数组，反转数组，转换成字符串
        return value.split('').reverse().join('')
      }
    },
    components:{
      subVue:subVue
    }
  }
</script>

其中
        显示：{{text | myFilter}}
text就是要过滤的值。
` filters:{
      myFilter:function(value){
    //这里面的value就是要过滤的text；
    //下面为返回过滤后被反转的值
        return value.split('').reverse().join('')
    }`
    


### [Vue.filter( id, [definition\] )](https://vuejs.org/v2/api/#Vue-filter)

- **Arguments:**

  - `{string} id`
  - `{Function} [definition]`

- **Usage:**

  Register or retrieve a global filter.

  ```
  // register
  Vue.filter('my-filter', function (value) {
    // return processed value
  })
  
  // getter, return the filter if registered
  var myFilter = Vue.filter('my-filter')
  ```

- **See also:** [Filters](https://vuejs.org/v2/guide/filters.html)





# Filters  

https://vuejs.org/v2/guide/filters.html

Vue.js allows you to define filters that can be used to apply common text formatting. Filters are usable in two places: **mustache interpolations and v-bind expressions** (the latter supported in 2.1.0+). Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol:

```
<!-- in mustaches -->
{{ message | capitalize }}

<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
```

You can define local filters in a component’s options:

```
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

or define a filter globally before creating the Vue instance:

```
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

Below is an example of our `capitalize` filter being used:

John

The filter’s function always receives the expression’s value (the result of the former chain) as its first argument. In the above example, the `capitalize` filter function will receive the value of `message` as its argument.

Filters can be chained:

```
{{ message | filterA | filterB }}
```

In this case, `filterA`, defined with a single argument, will receive the value of `message`, and then the `filterB` function will be called with the result of `filterA`passed into `filterB`‘s single argument.

Filters are JavaScript functions, therefore they can take arguments:

```
{{ message | filterA('arg1', arg2) }}
```

Here `filterA` is defined as a function taking three arguments. The value of `message`will be passed into the first argument. The plain string `'arg1'` will be passed into the `filterA` as its second argument, and the value of expression `arg2` will be evaluated and passed in as the third argument.
