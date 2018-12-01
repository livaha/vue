<template>
    <div>
        我是音乐
        <button @click="goMovie">跳转到电影</button>
        <button @click="goback">back</button>
        <button @click="gonext">next</button>

    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            goMovie(){
                //this.$router.push('/movie')
                this.$router.push({
                    name:'movie'
                })
            },
            gonext(){
                this.$router.go(1)
            }
        }
    }
</script>
<style>
    
</style>