<template>
	<!-- 提交订单 -->
	<view class="container">
		<view class="final-price">
			<text>合计：</text>
			<text>¥ 41.10</text>
			<text>共优惠¥1.00</text>
		</view>
		<text>提交订单</text>
	</view>
</template>

<script>
</script>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		
		background: #edf4ea; 
		
		/* 将页面固定在下方 */
		width:100%;
		height: 140upx;
		position:fixed;
		bottom:0;
		
		font-size: 30upx;
	}
	.final-price text:nth-child(2) {
		color: #ff0000;
		font-size: 45upx;
	}
	.final-price text:nth-child(3) {
		display: block;
		color: #ff0000;
	}
	
	.container > text:last-child {
		background: #009300;
		height: 70upx;
		line-height: 70upx;
		border-radius: 35upx;
		margin: 0 20upx;
		padding: 0upx 30upx;
		color: white;
	}
</style>