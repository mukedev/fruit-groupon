<template>
	<view>
		<Commodity></Commodity>
	</view>
</template>

<script>
	// 引入子组件
	import Commodity from './components/Commodity.vue'
	
	export default {
		components:{
			Commodity
		}
	}
</script>

<style>
	page{
	        background:#f0f0f0;  
	    }
</style>