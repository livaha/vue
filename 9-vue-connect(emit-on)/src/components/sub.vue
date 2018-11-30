<template>
	<div>
		subvue
		<button @click="callDady">call dady</button>
	</div>
</template>
<script>
	import connect from '../connector.js'
	export default{
		data(){
			return{

			}
		},
		methods:{
			callDady(){
				connect.$emit('phone','来了')
			}
		}
	}
</script>
<style scoped>
 div{
    height: 100px;
    background-color: hotpink;
 }
</style>