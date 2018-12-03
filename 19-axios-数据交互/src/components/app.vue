<template>
    <div>
        {{data}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:[]
            }
        },created(){
           this.$axios.get('/json/xx')
           .then(res=>{
            console.log(res);
            this.data = res.data.message;
            console.log(this.data);
           })
           .catch(err=>{
            console.log(err);
           })



           //post
           this.$axios.post('/postcomment/300',
            'content=post content'  //一般用的格式是'content=xxx'
           // {
           //  content:'霸气的'
           // },
           // {
           //  //设置发送请求头部格式，这里并不能保证发送的格式
           //  headers:{
           //      'content-type':'application/x-www-form-urlencoded'
           //  }
           // }
           )
           .then(res=>{
                this.data = res.data.message;
           })
           .catch(err=>{
            console.log(err);
           })

        }
    }
</script>
<style scoped>

</style>