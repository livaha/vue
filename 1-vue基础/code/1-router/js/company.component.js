export default{
	data(){
		return {
			count:200
		}
	},
	methods:{
		fn(){
			alert('bb')
		}
	},
	template:'<div>{{count}} <input type="button" value="按钮" @click="fn" /></div>'
}