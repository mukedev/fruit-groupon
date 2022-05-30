<template>
	<!-- 配送信息 -->
	<view class="container">
		<view>配送到家</view>
		
		<view class="address">
			<text>收货地址</text>
			<view class="address-select">
				<text>请选择收货地址</text>
				<text>></text>
			</view>
		</view>
		
		<view class="delivery">
			<text>预约配送</text>
			<text>2022/05/30 大约11:00 - 12:00 ></text>
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
	}
	.container view:nth-child(1) {
		text-align: center;
		color: seagreen;
	}
	.address > text:nth-child(1) {
		font-size: 30upx;
		color: #8f8f8f;
		
	}
	.address-select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #f0f0f0;
		
	}
	.delivery {
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70upx;
		line-height: 70upx;
	}
	.delivery > text:nth-child(2) {
		color: seagreen;
	}
	
</style>