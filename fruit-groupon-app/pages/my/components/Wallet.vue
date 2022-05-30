<template>
	<view class="container">
		<view class="wallet">
			<text>0.00</text>
			<text>钱包金额</text>
		</view>
		<view class="wallet">
			<text>30</text>
			<text>积分</text>
		</view>
		<view class="wallet">
			<text>6</text>
			<text>优惠券</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 35upx;
	}
	.wallet {
		margin-top: 20upx;
		font-size: 36upx;
	}
	.wallet text{
		display: block;
		text-align: center;
		/* border: solid 1upx black; */
	}
	.wallet text:first-child{
		font-weight: bold;
	}
</style>