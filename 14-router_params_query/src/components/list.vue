<template>
    <div>
        查询字符串列表:
        <ul v-for="(hero,index) in heros" :key="index">
            {{hero.name}}
            <router-link :to="{name:'detail',query:{id:index}}">查看</router-link>
        </ul>

        <ul>列表2
            <li v-for="(hero,index) in heros" :key="index">
            {{hero.name}}
            <router-link :to="{name:'detail',params:{id:index}}">查看</router-link>
            </li>
        </ul>

    </div>
</template>
<script>

    export default{
        data(){
            return{
                heros:[
                {
                    name:'LIBAI'
                },{
                    name:'HAEMEE'
                }
                ]
            }
        }
    }
</script>
<style>
    
</style>