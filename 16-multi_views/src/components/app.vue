<template>
    <div>
        <!--<header-vue>这个组件为全局组件才可以用，否则要在这里引入组件-->
        <header-vue></header-vue>
        <router-view name="header"></router-view>
        <router-view ></router-view>
        <router-view name="footer"></router-view>
        <!--footer-vue></footer-vue-->
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
    .b{
        height: 100px;
        background-color: skyblue;
    }
    .f{
        height: 100px;
        background-color: hotpink;
    }
</style>