<template>
	<!-- 订单商品列表 -->
	<view class="container">
		<text>订单商品</text>
		<view class="product">
			<view class="product-imgs">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				
			</view>
			<text>共3件 ></text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		margin: 20upx;
		padding: 20upx;
		background-color: #fff;
		border-radius: 20upx;
	}
	.container > text {
		display: block;
		border-bottom: 1upx solid #f0f0f0;
	}
	.product {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		margin-top: 25upx;
	}
	.product-imgs image {
		width: 100upx;
		margin-left: 15upx;
	}
	.product > text:last-child {
		position: fixed;
		right: 0;
		margin-right: 20upx;
		padding: 0 20upx;
		background-color: #fff;
		height: 110upx;
		line-height: 110upx;
	}
</style>