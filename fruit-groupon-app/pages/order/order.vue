<!-- 全部订单 -->
<template>
	<view>
		<OrderBar></OrderBar>
		<OrderProduct></OrderProduct>
	</view>
</template>

<script>
	// 引入组件
	import OrderBar from './components/OrderBar.vue'
	import OrderProduct from './components/OrderProduct.vue'
	
	export default {
		components: {
			OrderBar,
			OrderProduct
		}
	}
</script>

<style>
	page {
		background: #f4f4f4;
	}
</style>