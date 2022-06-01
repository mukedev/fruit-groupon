<template>
	<!-- 购物车商品价格统计 -->
	<view class="container">
		<!-- 全选 -->
		<checkbox :checked="isChecked" @click="isChecked=!isChecked"  >全选</checkbox>
		<view class="settlement">
			<view class="settlement-amount">
				<text>合计：¥ 53.80</text>
				<text>预计到手价：¥48.00</text>
			</view>
			<text @click="handleOrderConfirm">去结算(11)</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isChecked: true
			}
		},
		methods: {
			handleOrderConfirm() {
				uni.navigateTo({
					url: '/pages/orderconfirm/order_confirm'
				})
			}
		}
	}
</script>

<style scoped>
	.container  {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		font-size: 32upx;
		
		/* 将页面固定在下方 */
		width:100%;
		height: 140upx;
		position:fixed;
		bottom:0;
	}
	.container checkbox {
		margin-left: 15upx;
	}
	.settlement {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.settlement-amount text {
		display: block;
		color: #ff0000;
		font-size: 28upx;
	}
	.settlement-amount > text:nth-child(1) {
		font-size: 38upx;
	}
	.settlement > text:last-child {
		background: #009300;
		height: 80upx;
		line-height: 80upx;
		border-radius: 40upx;
		margin: 0 20upx;
		padding: 0upx 30upx;
		color: white;
	}
</style>