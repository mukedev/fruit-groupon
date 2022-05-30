<template>
	<!-- 价格明细 -->
	<view class="container">
		<text>价格明细</text>
		<view class="">
			<text>商品金额</text>
			<text>¥ 33.60</text>
		</view>
		<view class="">
			<text>配送费</text>
			<text>¥ 0.00</text>
		</view>
		<view class="">
			<text>包装袋</text>
			<text>¥ 0.00</text>
		</view>
		<view class="coupon">
			<text>优惠券</text>
			<text>0张可用 ></text>
		</view>
		<view class="minus">
			<text>促销优惠</text>
			<text>-¥ 0.00</text>
		</view>
		<view class="">
			<text>合计</text>
			<text>¥ 33.60</text>
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
	.container > view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		margin: 20upx 0;
	}
	.container > view > text:nth-child(1) {
		color: #8e8d8f;
	}
	.container > view > text:nth-child(2) {
		font-weight: bold;
	}
	.coupon > text:nth-child(2){
		font-size: 25upx;
		font-weight: unset;
		color: #8e8d8f;
	}
	.minus > text:nth-child(2){
		color: #ff0000;
	}
</style>