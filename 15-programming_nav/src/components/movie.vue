<template>
    <div>
        我是电影
        <button @click="goback">back</button>
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
            }
        }
    }
</script>
<style>
    
</style>