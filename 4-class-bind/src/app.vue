<template>
    <div>
    1.单个class:
    <div v-bind:class="isRed?'red':'yellow'">1.单个class:</div>
    2.多个class	:    
    <div :class="{'red':true,'big':true}">2.多个class:</div>
	3.复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩做key，取对象的value，最终返回字符串做样式名
    <ul>
    	<li v-for="stu in stus" :class="{ 'A':'red','B':'yellow'}[stu.score]">
    		{{stu.name}}
    	</li>
    </ul>
    </div>
</template>
<script>
// class 取一个 返回一个字符串
// 取多个  返回一个对象
// 一个学生列表  每个人都有成绩 AB，根据当前学生的成绩匹配显示不同的颜色
// A-red B-green
    export default {
        data(){
            return {
            	isRed:true,
            	stus:[{name:'jack',score:'A'},{name:'rose',score:'B'}]

            }
        }
    }
</script>
<style >
.red{
	background-color:red;
}
.yellow{
	background-color:yellow;
}
.big{
    font-size: 30px;
}

</style>