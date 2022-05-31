<template>
	<view class="container">
		<view class="order">
			<text>我的订单</text>
			<text @click="openOrderPage">全部订单></text>
		</view>
		<view class="order-items">
			<view class="order-item">
				<image src="../../../static/images/order/15.png" mode="widthFix"></image>
				<text>待配送</text>
			</view>
			<view class="order-item">
				<image src="../../../static/images/order/17.png" mode="widthFix"></image>
				<text>待收货</text>
			</view>
			<view class="order-item">
				<image src="../../../static/images/order/18.png" mode="widthFix"></image>
				<text>已送达</text>
			</view>
			<view class="order-item">
				<image src="../../../static/images/order/11.png" mode="widthFix"></image>
				<text>退款/售后</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			openOrderPage() {
				uni.navigateTo({
					url: '/pages/order/order'
				})
			}
		}
	}
</script>

<style>
	.container {
		margin: 30upx 20upx;
		border-radius: 25upx;
		background-color: #fff;
		padding-top: 30upx;
		/* border: solid 1upx black; */
	}
	.order {
		display: flex;
		justify-content: space-between;
		margin: 0 30upx;
	}
	.order text:first-child {
		font-weight: bold;
	}
	.order text:last-child {
		font-size: 30upx;
		color: #8c8c8d;
	}
	
	.order-items {
		display: flex;
		align-items: center;
		flex-wrap: wrap;/* 让弹性盒元素在必要的时候拆行 */ 
		margin-bottom: 20upx;
		font-size: 30upx;	
		padding-bottom: 40upx;
	}
	.order-item image {
		width: 70upx;
	}
	.order-item text {
		display: block;
	}
	.order-item {
		display: block;
		width: 24.2%;
		text-align: center;
		line-height: 30upx;
		margin-top: 25upx;
	}
</style>