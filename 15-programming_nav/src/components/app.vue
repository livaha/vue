<template>
    <div>
        <div class="h"></div>



        <router-link :to="{name:'music' }">查看</router-link>
        <router-view class="b"></router-view>

        <div class="f"></div>
        <button @click="toMusic" >toMusic</button>
        <button @click="testParams" >测试编程导航传递参数</button>
        <button @click="notfound" >404</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            toMusic(){
                //push 直接跳转到某个页面显示
                this.$router.push('/music')
            },
            testParams(){
                this.$router.push({
                    name:'movie',query:{id:1,name:2}
                })
            },
            notfound(){
                this.$router.push('/abc')
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