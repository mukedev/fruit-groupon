<template>
	<!-- 购物车 -->
	<view class="container">
		<!-- <CartNav></CartNav> -->
		<CartProduct></CartProduct>
		<CartPrice></CartPrice>
	</view>
</template>

<script>
	// 引入组件
	import CartNav from './components/CartNav.vue'
	import CartProduct from './components/CartProduct.vue'
	import CartPrice from './components/CartPrice.vue'
	
	export default {
		components: {
			CartNav,
			CartProduct,
			CartPrice,
		}
	}
</script>

<style>
	page {
		background: #f4f4f4;
	}
</style>