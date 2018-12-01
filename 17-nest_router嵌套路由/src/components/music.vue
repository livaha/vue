<template>
    <div class="m">
        <h4>欢迎来到音乐世界</h4>
        <router-link :to="{name:'music_oumei'}">欧美音乐</router-link>
        <router-link :to="{name:'music_guochan'}">国产音乐</router-link>

        <hr/>
        <div class="mf">
            <!-- 变化的音乐数据 -->
            <router-view></router-view>

        </div>
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
    .m{
        height: 100px;
        background-color: yellow;
        margin:50px 0px;
    }    
    .mf{
        height: 100px;
        background-color: blue;
    }
</style>