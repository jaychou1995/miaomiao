import Vue from 'vue'
import MessageBox from './MessageBox/'


export var MessageBoxs = (function(){
	var defaults = {
		//默认值
		title:'定位到您在',
		city:'北京',
		content:'是否要切换至该城市进行探索?',
		cancel:'取消',
		ok:'切换',
		handleCancel:null,
		handleOk:null
	}
	
	var MyComponent = Vue.extend(MessageBox)
	
	return function(opts){
		for(let attr in opts){
			defaults[attr] = opts[attr]
		}
		
		
		var vm = new MyComponent({
			el : document.createElement('div'),
			data:{
				title:defaults.title,
				city:defaults.city,
				content:defaults.content,
				cancel:defaults.cancel,
				ok:defaults.ok,
			},
			methods:{
				handleCancel(){
					defaults.handleCancel && defaults.handleCancel.call(this);
					document.body.removeChild(vm.$el);
				},
				handleOk(){
					defaults.handleOk && defaults.handleOk.call(this);
					document.body.removeChild(vm.$el);
				}
			}
		})
		
		document.body.appendChild(vm.$el);
		
	}
	
})()