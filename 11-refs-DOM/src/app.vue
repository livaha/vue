<template>
    <div>

        <sub-vue ref="sub"></sub-vue>

        <div ref="myDiv">
          test:{{text}}          
        </div>

    </div>
</template>
<script>
  import subVue from './components/sub.vue'
  export default{
    data(){
      return{
        text:'test'
      }
    },
    components:{
      subVue:subVue
    },
    //组件创建后，数据已经完成初始化，但DOM还未生成
    //事件处理函数 created
    created(){
      console.log('created-dom:',this.$refs.myDiv)//这是DOM的，组件的不会经过这里
    },
    //数据装载DOM完成后，各种数据已经就位，将数据渲染到DOM上
    //此时DOM已经生成
    mounted(){

      console.log('mounted-dom:',this.$refs.myDiv)
      // 涉及DOM类的操作
      //this.$refs.myDiv.innerHTML = '哈哈呵呵'
      //console.log('mounted-dom:',this.$refs.myDiv)
      this.text = "嘻嘻"
      console.log('mounted-dom:',this.$refs.myDiv)

      //获取组件对象，并获取到其的DOM对象
      //通过refs获取组件的$el元素
      console.log('mounted-subvue:',this.$refs.sub.$el)

    }
  }

</script>
<style>
    
</style>