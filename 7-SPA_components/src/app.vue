<template>
   <div>
      <header-vue></header-vue>
      <body-vue></body-vue>
      <footer-vue></footer-vue>
   </div>
</template>
<script>
  //引入子组件对象
  import headerVue from './components/header.vue'
  import bodyVue from './components/body.vue'
  import footerVue from './components/footer.vue'

  export default{
    data(){
      return{

      }
    },
    components:{
      //组件名（在模板中使用）：组件对象
      headerVue : headerVue,
      bodyVue : bodyVue,
      footerVue   //两相同可简写成一个
    }
  }
</script>
<style >

</style>