<template>
   <div>
      <subVue></subVue>
      <button @click="listen">爸爸焦急地听电话</button>
   </div>
</template>
<script>
  import connect from './connector.js'
  export default{
    data(){
      return{
      }
    },
    methods:{
      listen(){
        connect.$on('phone',function(msg){
          alert('get msg:'+msg)
        })
      }
    }
  }
</script>
<style >

</style>