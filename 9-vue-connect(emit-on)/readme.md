#### 使用emit, on  实例

可以先阅读下面的官方文档

1 先创建一个vue对象connect ==>在connect.js中创建

2 在app.vue和sub.vue组件中使用connect.$on和connect$.emit

3 由于是父发起监听，子发射信息，所以 

​    在app.vue中使用$.on,  在sub.vue中使用$.emit

------------





vue官网的api文档 ：

https://vuejs.org/v2/api/#vm-on



## [Instance Methods / Events](https://vuejs.org/v2/api/#Instance-Methods-Events)

### [vm.$on( event, callback )](https://vuejs.org/v2/api/#vm-on)

- **Arguments:**

  - `{string | Array<string>} event` (array only supported in 2.2.0+)
  - `{Function} callback`

- **Usage:**

  Listen for a custom event on the current vm. Events can be triggered by `vm.$emit`. The callback will receive all the additional arguments passed into these event-triggering methods.

- **Example:**

  ```
  vm.$on('test', function (msg) {
    console.log(msg)
  })
  vm.$emit('test', 'hi')
  // => "hi"
  ```



### vm.$emit( eventName, […args\] )](https://vuejs.org/v2/api/#vm-emit)

- **Arguments:**

  - `{string} eventName`
  - `[...args]`

  Trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function.

- **Examples:**

  Using `$emit` with only an event name:

  ```
  Vue.component('welcome-button', {
    template: `
      <button v-on:click="$emit('welcome')">
        Click me to be welcomed
      </button>
    `
  })
  ```

  ```
  <div id="emit-example-simple">
    <welcome-button v-on:welcome="sayHi"></welcome-button>
  </div>
  ```

  ```
  new Vue({
    el: '#emit-example-simple',
    methods: {
      sayHi: function () {
        alert('Hi!')
      }
    }
  })
  ```

  Click me to be welcomed

  Using `$emit` with additional arguments:

  ```
  Vue.component('magic-eight-ball', {
    data: function () {
      return {
        possibleAdvice: ['Yes', 'No', 'Maybe']
      }
    },
    methods: {
      giveAdvice: function () {
        var randomAdviceIndex = Math.floor(Math.random() * this.possibleAdvice.length)
        this.$emit('give-advice', this.possibleAdvice[randomAdviceIndex])
      }
    },
    template: `
      <button v-on:click="giveAdvice">
        Click me for advice
      </button>
    `
  })
  ```

  ```
  <div id="emit-example-argument">
    <magic-eight-ball v-on:give-advice="showAdvice"></magic-eight-ball>
  </div>
  ```

  ```
  new Vue({
    el: '#emit-example-argument',
    methods: {
      showAdvice: function (advice) {
        alert(advice)
      }
    }
  })
  ```

  Click me for advice

 