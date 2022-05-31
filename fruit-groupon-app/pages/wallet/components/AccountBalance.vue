<!-- 账户余额组件 -->
<template>
	<view class="container">
		<view class="account-title">
			<text>账户余额(元)</text>
			<view>
				<text>收支明细</text>
				<uni-icons type="forward" color="#ebeaeb" size="13"></uni-icons>
			</view>
			
		</view>
		<view class="account-balance">100.00</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		margin: 20upx;
		background: #189649;
		border-radius: 20upx;
		padding: 30upx 20upx;
	}
	.account-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		color: #ebeaeb;
		
	}
	.account-balance {
		font-size: 80upx;
		color: #fff;
	}
</style>