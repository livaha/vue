<template>
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
<style>
    
</style>