<!-- 订单商品 -->
<template>
	<view class="wrap">
		<view class="order">
			<view class="order_time">
				<text>2022-06-01 18:22:10</text>
				<text>已取消</text>
			</view>
			<view class="order_info">
				<view class="first_order">
					<image src="../../../static/cake.jpeg" mode="widthFix"></image>
					<text>夹心蛋糕 1个</text>
				</view>
				<text>等3件</text>
			</view>
			<view class="order_amount">合计：¥ 39.10</view>
			<view>
				<button class="del_order">删除订单</button>
			</view>
		</view>
		
		<view class="order">
			<view class="order_time">
				<text>2022-06-01 18:22:10</text>
				<text>已取消</text>
			</view>
			<view class="order_info">
				<view class="first_order">
					<image src="../../../static/cake.jpeg" mode="widthFix"></image>
					<text>夹心蛋糕 1个</text>
				</view>
				<text>等3件</text>
			</view>
			<view class="order_amount">合计：¥ 39.10</view>
			<view>
				<button class="del_order">删除订单</button>
			</view>
		</view>
		<view class="order">
			<view class="order_time">
				<text>2022-06-01 18:22:10</text>
				<text>已取消</text>
			</view>
			<view class="order_info">
				<view class="first_order">
					<image src="../../../static/cake.jpeg" mode="widthFix"></image>
					<text>夹心蛋糕 1个</text>
				</view>
				<text>等3件</text>
			</view>
			<view class="order_amount">合计：¥ 39.10</view>
			<view>
				<button class="del_order">删除订单</button>
			</view>
		</view>
	</view>
	
</template>

<script>
</script>

<style scoped>
	.order {
		margin: 20upx;
		padding: 20upx;
		background: #fff;
		border-radius: 10upx;
		font-size: 28upx;
	}
	.order_time, .order_info{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 20upx 0;
	}
	.first_order {
		width: 80%;
		display: flex;
		align-items: center;
	}
	.first_order image {
		width: 30%;
	}
	.order_amount{
		text-align: right;
		font-weight: bold;
	} 
	.del_order {
		width: 170upx;
		font-size: 28upx;
		float: right;
	}
	.order > view:last-child {
		margin-top: 10upx;
		text-align: right;
		overflow: hidden;
	}
	 
</style>