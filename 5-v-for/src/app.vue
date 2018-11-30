<template>
   <div>
       v-for:以分数的方式循环列表，将各项输出
       <!--输出：
       index:0,stu:{ "name": "jack" }
        index:1,stu:{ "name": "haemee" }
        index:2,stu:{ "name": "rose" }
        value:jack,key:name,index:0
        value:mike,key:alise,index:1-->
        <ul>
           <li v-for="(stu,index) in stus" v-bind:key="index">
               index:{{index}},stu:{{stu}}
           </li>
           <li v-for="(value,key,index) in person" :key="index">
               value:{{value}},key:{{key}},index:{{index}}
           </li>
       </ul>
   </div>
</template>
<script>

    export default {
        data(){
            return {
                stus:[{name:'jack'},{name:'haemee'},{name:'rose'}],
                person:{name:'jack',alise:'mike'}
            }
        }
    }
</script>
<style >
</style>