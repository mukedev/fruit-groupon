<template>
	<!-- 订单备注 -->
	<view class="container">
		<text>备注</text>
		<text>如遇缺货：缺货商品退款，其他商品继续配送 ></text>
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
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		margin-bottom: 200upx;
	}
	.container text:nth-child(1) {
		font-size: 30upx;
		color: #767678;
	}
	.container text:nth-child(2) {
		font-size: 28upx;
		color: #b7b7bb;
	}
</style>