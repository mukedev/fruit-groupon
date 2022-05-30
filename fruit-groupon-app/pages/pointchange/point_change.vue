<template>
	<!-- 积分兑换 -->
	<view class="">
		<PointAbout></PointAbout>
		<PointProduct></PointProduct>
	</view>
	
</template>

<script>
	// 引入组件
	import PointAbout from './components/PointAbout.vue'
	import PointProduct from './components/PointProduct.vue'
	export default {
		components: {
			PointAbout,
			PointProduct
		}
	}
</script>

<style>
	page{
		background:#fff;  
	}
</style>