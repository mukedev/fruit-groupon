<template>
	<!-- 确认订单 -->
	<view class="">
		<DeliveryInfo></DeliveryInfo>
		<OrderProducts></OrderProducts>
		<PriceDetail></PriceDetail>
		<OrderRemark></OrderRemark>
		<OrderSubmit></OrderSubmit>
	</view>
</template>

<script>
	// 引入组件
	import DeliveryInfo from  './components/DeliveryInfo.vue'
	import OrderProducts from './components/OrderProducts.vue'
	import PriceDetail from './components/PriceDetail.vue'
	import OrderRemark from './components/OrderRemark.vue'
	import OrderSubmit from './components/OrderSubmit.vue'
	
	export default {
		components: {
			DeliveryInfo,
			OrderProducts,
			PriceDetail,
			OrderRemark,
			OrderSubmit,
		}
	}
</script>

<style>
	page{
		background: #f4f4f4;
	}
</style>