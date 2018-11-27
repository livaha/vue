export default{
	data(){
		return {
			count:12
		}
	},
	methods:{
		fn(){
			alert('aa')
		}
	},
	template:'<div>{{count}} <input type="button" value="按钮" @click="fn" /></div>'
}
	