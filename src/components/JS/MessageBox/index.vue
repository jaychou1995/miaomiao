<template>
	<div class="messagebox">
		<h2>
			{{title}}
			<span>{{city}}</span>
		</h2>
		<p>{{content}}</p>
		<div class="select">
			<span id="qx" @touchstart="handleCancel">{{cancel}}</span>
			<span id="qh" @touchstart="handleOk">{{ok}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'messagebox'
	}
</script>

<style scoped>
	.messagebox{
		width: 300px;
		height: 140px;
		background-color: #fff;
		border-radius: 5px;
		border: 1px solid #ccc;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		padding: 10px 30px;
		box-sizing: border-box;
	}
	h2{
		font-size: 18px;
		margin-bottom: 10px;
	}
	h2 span{
		color: #E54847;
		margin-left: 10px;
	}
	.select{
		position: absolute;
		bottom: 10px;
		right: 30px;
	}
	.select span{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin-left: 20px;
	}
</style>
