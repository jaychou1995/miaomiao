<template>
	<div id="main">
		<Header :title="title"></Header>
		<BtabBar></BtabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import BtabBar from '@/components/BtabBar/index.vue'
	export default {
		name:'Mine',
		components:{
			Header,BtabBar
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
