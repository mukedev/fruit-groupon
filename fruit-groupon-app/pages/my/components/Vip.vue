<template>
	<view class="container">
		
		<view>
			<text>vip会员</text>
		</view>
		<view>开通会员，每月享超60元优惠</view>
		<view class="vip-detail">
			<image src="../../../static/01.jpeg" mode="scaleToFill"></image>
			<view class="vip-buy">
				<text>¥7.6</text>
				<text style="text-decoration: line-through;">¥15</text>
				<view>购买</view>
			</view>
			
		</view>
		<view class="">31天内有效 ｜ 每单仅限用1张</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		margin: 30upx 20upx;
		border-radius: 25upx;
		background-color: #f2ddc8;
	}
	.container > view:first-child {
		margin: 1upx;
		background-color: #daa520;
		width: 160upx;
		border-radius: 100upx;
		text-align: center;
		font-size: 35%;
	}
	.container > view:nth-child(2) {
		margin: 20upx;
		font-weight: bold;
	}
	.vip-detail image {
		width: 65%;
		height: 150upx;
	}
	.vip-detail {
		margin: 0 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.vip-buy {
		width: 30%;
		display: block;
		text-align: center;
	}
	.vip-buy text:first-child {
		color: #ff0000;
		margin-right: 15upx;
	}
	.vip-buy text:nth-child(2) {
		font-size: 25upx;
	}
	.vip-buy > view:last-child {
		width: 50%;
		color: #fff;
		background-color: #5ac028;
		margin-top: 20upx;
		font-size: 35upx;
		margin-left: 17%;
	}
	.container > view:last-child {
		font-size: 23upx;
		margin-left: 20upx;
	}
	
</style>