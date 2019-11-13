<template>
	<div id="main">
		<Header :title="title"></Header>
		<Login></Login>
		<BtabBar></BtabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import BtabBar from '@/components/BtabBar/index.vue'
	import Login from '@/components/Login/index.vue'
	export default {
		name:'Mine',
		components:{
			Header,BtabBar,Login
		},
		data(){
			return{
				title:'个人中心'
			}
		}
	}
</script>

<style>
</style>
