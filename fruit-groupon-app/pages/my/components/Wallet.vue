<template>
	<view class="container">
		<view class="wallet" @click="openWallet">
			<text>¥0.00</text>
			<text>钱包金额</text>
		</view>
		<view class="wallet" @click="openPoints">
			<text>30</text>
			<text>积分</text>
		</view>
		<view class="wallet" @click="openCoupon">
			<text>6</text>
			<text>优惠券</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			openWallet() {
				uni.navigateTo({
					url: '/pages/wallet/wallet'
				})
			},
			openPoints() {
				uni.navigateTo({
					url: '/pages/points/points'
				})
			},
			openCoupon() {
				uni.navigateTo({
					url: '/pages/coupon/coupon'
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 35upx;
		margin: 30upx 20upx;
		background: #fff;
		border-radius: 25upx;
	}
	.wallet {
		margin-top: 20upx;
		font-size: 32upx;
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