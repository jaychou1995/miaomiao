<template>
	<div class="city_body">
		<div class="city_list">
		    <div class="city_hot">
		        <h2>热门城市</h2>
		        <ul class="clearfix">
		            <li v-for="(item,index) in hotList" :key="item.id">{{item.nm}}</li>
		        </ul>
		    </div>
		    <div class="city_sort" ref="city_sort">
		        <div v-for="(item,index) in cityList" :key="item.index">
		            <h2>{{item.index}}</h2>
		            <ul>
<!-- 		                <li>阿拉善盟</li>
		                <li>鞍山</li>
		                <li>安庆</li>
		                <li>安阳</li> -->
						<li v-for="(itemList,index2) in item.list" :key="itemList.id">{{itemList.nm}}</li>
		            </ul>
		        </div>	
		    </div>
		</div>
		<div class="city_index">
		    <ul>
		        <!-- <li>A</li>
		        <li>B</li>
		        <li>C</li>
		        <li>D</li>
		        <li>E</li> -->
				<li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>
		    </ul>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'City',
		data(){
			return{
				cityList:[],
				hotList:[]
			}
		},
		mounted() {
			this.axios.get('/api/cityList').then((res)=>{
				if(res.data.msg == 'ok'){
					let data = res.data.data.cities;
					// [{index:'a',list:[{nm:'阿城',id:123}]}]
					let {cityList,hotList} = this.formatCityList(data)
					
					this.cityList = cityList
					this.hotList = hotList

				}
			})
		},
		methods:{
			formatCityList(cities){
				let cityList = []  //城市列表
				let hotList = []  //热门城市
				
				for (let i=0;i<cities.length;i++) {
					if(cities[i].isHot == 1){
						hotList.push(cities[i])
					}
					let firstLetter = cities[i].py.substring(0,1).toUpperCase();
					if(toCom(firstLetter)){
						//新添加索引
						cityList.push({
							index:firstLetter,
							list:[{nm:cities[i].nm,id:cities[i].id}]
						})
					}else{
						//累加到index中
						for(let j=0;j<cityList.length;j++){
							if(cityList[j].index === firstLetter){
								cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
							}
						}
					}
				}
				
				cityList.sort((n1,n2)=>{
				    if( n1.index > n2.index ){
				        return 1;
				    }
				    else if(n1.index < n2.index){
				        return -1;
				    }
				    else{
				        return 0;
				    }
				});
				
				function toCom(firstLetter){
					for(let i=0;i<cityList.length;i++){
						if(cityList[i].index === firstLetter){
							return false
						}
					}
					return true
				}
				
				return {
				    cityList,
				    hotList
				};
			},
		
			handleToIndex(index){	
				let h2 = this.$refs.city_sort.getElementsByTagName('h2')
				this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
			}
		}
	}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
/* .city_body .city_hot{ margin-top: 20px;} */
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#f5f5f5; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#f5f5f5; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 40px; line-height: 40px;border-bottom: 1px solid #F5F5F5;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;background-color: #E5E5E5}
.city_body .city_index li{
	color: #00c9e2;
	font-size: 12px;
}
</style>
