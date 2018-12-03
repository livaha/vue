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
            //get请求
            // console.log(this.$http);
            // this.$http.get('http://182.254.146.100:8899/api/getlunbo')
            // .then(res=>{
            //     this.data = res.body.message;
            // },err=>{
            //     console.log(err)
            // })
            
            //post请求
            this.$http.post('http://182.254.146.100:8899/api/postcomment/300',{
                content:'霸气'
            },{
                emulateJSON:true
            })
            .then(res=>{
                this.data = res.body.message;
            },err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>

</style>