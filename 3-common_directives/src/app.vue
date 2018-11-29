<template>
           <!-- 固定的template ,script ,style三种模式可参考 vue-loader 官方文档-->
           <!--只能有一个根节点div-->
    <div>
    	<pre>
    		测试内容：
				* v-text 是元素的innerText只能在双标签中使用  input用了不起作用
				* v-html 是元素的innerHTML，不能包含<!-- {{xxx}} -->
				* v-if 元素是否移除或者插入
				* v-show 元素是否显示或隐藏
				* v-model  	双向绑定
    	</pre>
    		v-text :
    		<span v-text="text"></span><hr>

    		v-html:
    		<span v-html="html"></span><hr>

    		v-if:点击显示/隐藏（删除）示例：
    		<button @click="show">显示/隐藏（删除）F12查看</button><br>
    		<div v-if="isShow" style="height:100px;background-color:pink">
    		</div><hr>

    		v-show:点击显示/隐藏（隐藏）示例：<br>
    		<div v-show="isShow" style="height:100px;background-color:pink">
    		</div><hr>

    		v-model:
    		<input type="text" name="" v-model="text">

    </div>
</template>
<script>
	export default{
		data(){
			return{
				text:'对比下面的v-model,会被它修改哦，因为被它绑定了',
				html:`
                    <ul>
                        <li>哈哈</li>
                        <li>呵呵</li>
                    </ul>
                `,
                isShow:true,
			}
		},
		methods:{
			show(){
				this.isShow = !this.isShow
			}
		}
	}

</script>
<style></style>