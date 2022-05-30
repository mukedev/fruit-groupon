<template>
	<!-- 积分收支明细 -->
	<view class="container">
		<text>积分收支明细</text>
		
		<block>
			<view class="point-detail">
				<view class="point-option">
					<text>消费获增10积分</text>
					<text>2022-05-28 16:33:21</text>
				</view>
				<text>+10</text>
			</view>
			<view class="point-detail">
				<view class="point-option">
					<text>消费获增10积分</text>
					<text>2022-05-28 16:33:21</text>
				</view>
				<text>+10</text>
			</view>
			<view class="point-detail">
				<view class="point-option">
					<text>消费获增10积分</text>
					<text>2022-05-28 16:33:21</text>
				</view>
				<text>+10</text>
			</view>
			<view class="point-detail">
				<view class="point-option">
					<text>消费获增10积分</text>
					<text>2022-05-28 16:33:21</text>
				</view>
				<text>+10</text>
			</view>
		</block>
	</view>
</template>

<script>
</script>

<style>
	
	.container {
		margin: 20upx 25upx;
		background-color: #fff;
	}
	.container > text {
		font-weight: bold;
		display: block;
		margin: 20upx 35upx;
		padding-top: 15upx;

	}
	.point-detail {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* border: solid 1upx black; */
		border-bottom: 1upx solid #a4a4a4;
		margin: 0 35upx;
		height: 140upx;
		height: 140upx;
		
	}
	.point-option text {
		display: block;
		font-size: 32upx;
		font-weight: 445;
	}
	.point-option text:nth-child(2) {
		font-size: 30upx;
		font-weight: 350;
		color: #a4a4a4;
	}
	.point-detail > text:last-child {
		color: #5ac028;
		font-weight: 500;
	}
</style>