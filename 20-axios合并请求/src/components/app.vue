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
          // 获取省市数据的需求
          //将两个请求一起发送，只要有一个失败，就算失败，成功只有是全体成功
          this.$axios.all([
            this.$axios.get('/user/12345'),
            this.$axios.get('/user/12345/permissions')
          ])

          //分发响应
          .then(this.$axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
             console.log('成功啦');
             console.log(acct);
             console.log(perms);
          }));

        }
    }
</script>
<style scoped>

</style>