<template>
	<!-- 积分 -->
	<view>
		<Point></Point>
		<PointDetail></PointDetail>
	</view>
	
</template>

<script>
	// 引入组件
	import Point from './components/Point.vue'
	import PointDetail from './components/PointDetail.vue'
	
	export default {
		components: {
			Point,
			PointDetail
		}
	}
</script>

<style>
	page{
		background:#f4f4f4;  
	}
</style>