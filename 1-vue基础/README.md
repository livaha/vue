## VUE基础

#### MVC模式

1.M   Model-模型：数据
2.V   View-视图：表现层
3.C   Controller-控制器：业务逻辑

1.分离——简洁、测试
2.分工

------------------------------------------------------------------------------------------------------------------------

vue好在哪儿：
1.分工明确
2.工作效率高
3.统一

------------------------------------------------------------------------------------------------------------------------

改变：
1.不要直接操作DOM
2.数据为中心——数据驱动

------------------------------------------------------------------------------------------------------------------------

#### 1.数据绑定--单向  

数据绑定：
1.单向    {{输出}}      数据 => 视图

~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					name:'haemee'
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		name:{{name}}
	</div>
</body>
</html>
~~~

效果：![1542967921134](assets/1542967921134.png)



#### 2.数据绑定--双向  

数据绑定：

2.双向    v-model      数据 <=> 视图

~~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					txt:''
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		<input type="text" v-model='txt'>
		<span>{{txt}}</span>
	</div>
</body>
</html>
~~~~

效果：![1542967853471](assets/1542967853471.png)



#### 3.属性绑定

  v-bind:属性="数据"    相当于     :属性="数据"

  :style="json"
  :class="arr"

~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					txt:'abc',
					styleJson:{
						color:'',
						display:'block',
						'font-size':'40px'
					},
				arr:['aaa','bbb','ccc']
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		<span v-bind:title="txt">span标签</span></br>
		<span :title="txt">span标签</span></br></br>

		<input type="text" v-model="styleJson.color">
		<span :style="styleJson">span标签</span></br></br>

		<span :class="arr">F12看class是否多了</span>

	</div>
</body>
</html>
~~~



#### 4.事件绑定

  v-on:xxx="函数"
  @xxx="函数"

~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					count:0
				},
				methods:{
					add(){
						this.count++;
					},
					del(){				
						this.count--;
					}
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		{{count}}<br>
		<span v-on:click="add">span标签</span><br>
		<span v-on:click="del">span标签</span><br>
		
	</div>
</body>
</html>
~~~



#### 5.循环

  v-for="val,key in 数组"
  v-for="val,key in json"

~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					usersArr:[
					{name:'haemee',age:13},
					{name:'jack',age:16},
					{name:'eaa',age:9}
					],
					usersJson:{
						'1':{name:'haemee',age:13},
						'2':{name:'haemee',age:13},
						'3':{name:'haemee',age:13}
					}	
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		<ul>
			<li v-for="item,index in usersArr">
				<i>{{index}}  </i>name:{{item.name}},age:{{item.age}}
			</li>
			<br>
			<li v-for="item,index in usersJson">
				<i>{{index}}  </i>name:{{item.name}},age:{{item.age}}
			</li>
		</ul>
	</div>
</body>
</html>
~~~

效果：![1542970399722](assets/1542970399722.png)



#### 6. v-show与v-if   

v-show    display

v-if      删除

~~~html
<!DOCTYPE html>
<html>
<head>
	<title></title>
    <style media="screen">
    .box1 {width:300px; height:150px; background:green}
    .box2 {width:300px; height:150px; background:pink}
    </style>
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			let vm = new Vue({
				el:'#div1',
				data:{
					showFlag:true
				},
				methods:{
					show(){
						this.showFlag = !this.showFlag
					}
				}
			})
		}
	</script>
</head>
<body>
	<div id="div1">
		<input type="button" value="on/off" @click="show">
		<div class="box1" v-show="showFlag">隐藏这个盒子</div>

		<div class="box2" v-if="showFlag">删除这个盒子--  f12可查看</div>
	</div>
</body>
</html>
~~~



v-if的应用例子

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    .box {width:300px; height:150px; background:#CCC}
    </style>
    <script src="vue.js" charset="utf-8"></script>
    <script>
    window.onload=function (){
      let vm=new Vue({
        el: '#div1',        //根元素
        data: {
          subscript: true
        },
        methods: {
          fnShowHide(){
            this.show=!this.show;
          }
        }
      });
    };
    </script>
  </head>
  <body>
    <div id="div1">
      <form action="http://localhost/" method="get">
        <input type="text" name="user" value="blue"><br>

        {{subscript}}
        <input type="checkbox" v-model="subscript"> 发送邮件给我
        <input v-if="subscript" type="email" name="email" value="aaa@163.com"><br>

        <input type="submit" name="" value="提交">
      </form>
    </div>
  </body>
</html>

~~~



#### 



