<template>
	<div class="warpper" ref="warpper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'Scroll',
		props:{
			handleToScroll:{
				type:Function,
				default:function(){}
			},
			handleToTouchEnd:{
				type:Function,
				default:function(){}
			}
		},
		data(){
			return{
				scroll:''
			}
		},
		mounted() {
			let scroll = new BScroll(this.$refs.warpper,{
				tap:true,
				probeType:2
			})
			this.scroll = scroll
			scroll.on('scroll',(pos)=>{
				this.handleToScroll(pos)
			})
			
			scroll.on('touchEnd',(pos)=>{
				this.handleToTouchEnd(pos)
			})
			
		},
		methods:{
			toScrollTop(y){
				this.scroll.scrollTo(0,y)
			}
		}
	}
</script>

<style scoped>
	.warpper{
		height: 100%;
	}
</style>
