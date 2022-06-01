<template>
	<view class="container">
		<text>我的服务</text>
			<!-- <view class="">我的服务：收货地址 ｜ 积分兑换 ｜ 意见箱 ｜ 联系客服 ｜ 系统设置</view> -->
		<view class="service-items">
			<view class="service-item" @click="openAddress">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>收货地址</text>
			</view>
			<view class="service-item" @click="openPoints">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>积分兑换</text>
			</view>
			<view class="service-item" @click="openSuggest">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>意见反馈</text>
			</view>
			<view class="service-item" @click="openServices">
				<image src="../../../static/shop.png" mode="widthFix"></image>
				<text>联系客服</text>
			</view>
			<view class="service-item" @click="openSystem">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>系统设置</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			openAddress() {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},
			openPoints() {
				uni.navigateTo({
					url: '/pages/points/points'
				})
			},
			openSuggest() {
				uni.navigateTo({
					url: '/pages/suggest/suggest'
				})
			},
			openServices() {
				uni.navigateTo({
					url: '/pages/services/services'
				})
			},
			openSystem() {
				uni.navigateTo({
					url: '/pages/system/system_setup'
				})
			},
		}
	}
</script>

<style scoped>
	.container {
		margin: 30upx 20upx;
		border-radius: 25upx;
		background-color: #fff;
		padding-top: 30upx;
	}
	.container > text:first-child {
		font-weight: bold;
		margin-left: 30upx;
	}
	.service-items {
		display: flex;
		align-items: center;
		flex-wrap: wrap;/* 让弹性盒元素在必要的时候拆行 */ 
		margin-bottom: 20upx;
		font-size: 30upx;	
		padding-bottom: 40upx;
	}
	.service-item image {
		width: 70upx;
	}
	.service-item text {
		display: block;
	}
	.service-item {
		display: block;
		width: 24.2%;
		text-align: center;
		line-height: 30upx;
		margin-top: 25upx;
	}
</style>