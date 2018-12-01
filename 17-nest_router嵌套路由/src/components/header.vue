<template>
    <div class="h">
         <a href="#/">首页</a>
        <router-link :to="{name:'music'}">音乐</router-link>

        <h4>欢迎来到首页</h4>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    .h{
        height: 100px;
        background-color: yellowgreen;
    }
    
</style>