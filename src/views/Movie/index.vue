<template>
	<div id="main">
		<Header :title="title"></Header>
		
		<div id="content">
			<!-- 导航 -->
			<div class="movie_menu">
				<router-link tag="div" to="/movie/city" class="city_name">
				    <span>{{ $store.state.city.nm }}</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
				    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
				    <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry">
				    <i class="iconfont icon-sousuo"></i>
				</router-link>
			</div>
			
			<keep-alive>
			    <router-view />
			</keep-alive>
			
		</div>
		
		<BtabBar></BtabBar>
		<router-view name='detail'></router-view>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import BtabBar from '@/components/BtabBar/index.vue'
	import {MessageBoxs} from '@/components/JS'
	
	export default {
		name:'Movie',
		components:{
			Header,BtabBar
		},
		data(){
			return{
				title:'喵喵电影'
			}
		},
		mounted() {
			
			setTimeout(()=>{
				this.axios.get('/api/getLocation').then((res)=>{
					if(res.data.msg === 'ok'){
						var nm = res.data.data.nm;
						var id = res.data.data.id;
						//如果城市相同直接返回
						if( this.$store.state.city.id == id ){return;}
						
						MessageBoxs({
							title:'定位到您在',
							city:nm,
							content:'是否要切换至该城市进行探索?',
							cancel:'取消',
							ok:'切换',
							handleCancel(){
								console.log(1);
							},
							handleOk(){
								console.log(2);
								window.localStorage.setItem('nowNm',nm);
								window.localStorage.setItem('nowId',id);
								//window.location.reload();重新加载
								window.location.reload();
							}
						})
						
					}
				})
			},1200)

		}
	}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}
</style>
