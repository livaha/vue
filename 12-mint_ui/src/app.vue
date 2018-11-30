<template>
    <div>  
      <mt-header title="菜单列表">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <mt-button @click="handleClose">关闭</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-cell title="标题文字"> <mt-spinner :size="16" color="#26a2ff"></mt-spinner> </mt-cell>
      <mt-cell title="标题文字" value="说明文字"></mt-cell>
      <mt-cell title="标题" label="描述信息" is-link></mt-cell>

      
      <mt-spinner ></mt-spinner>
      <mt-spinner color="yellow"></mt-spinner>

      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

    </div>
</template>
<script>
//在js部分所有变量都是模块作用域
//如果需要使用就必须引入
import { Toast } from 'mint-ui';

  export default{
    data(){
      return{

      }
    },
    methods:{
      handleClose(){
                Toast('提示信息');
      }
    }
  }

</script>
<style>
    
</style>