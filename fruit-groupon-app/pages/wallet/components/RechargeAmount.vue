<!-- 充值金额（面额）组件 -->
<template>
	<view class="container">
		<!-- <text>好香啊</text> -->
		<block>
			<view class="amount">
				<text>¥100</text>
				<text>售价100元</text>
			</view>
			<view class="amount">
				<text>¥200</text>
				<text>售价200元</text>
			</view>
			<view class="amount">
				<text>¥300</text>
				<text>售价300元</text>
			</view>
			<view class="amount">
				<text>¥500</text>
				<text>售价500元</text>
			</view>
			<view class="amount">
				<text>¥1000</text>
				<text>售价1000元</text>
			</view>
			
			
		</block>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		margin: 20upx;
		padding: 20upx;
		background: #fff;
		border-radius: 10upx;
		
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
	.amount {
		margin: 0 10upx;
		margin-bottom: 20upx;
		padding: 20upx 0;
		font-size: 60upx;
		background: #f5f6f9;
		width: 30%;
		text-align: center;
		border-radius: 10upx;
	}
	.amount text {
		display: block;
	}
	.amount::first-letter {
		font-size: 35upx;
	}
	.amount > text:last-child {
		font-size: 30upx;
	}
</style>