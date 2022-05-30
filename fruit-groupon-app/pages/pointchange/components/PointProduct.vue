<template>
	<!-- 积分精选 -->
	<view class="pointProductlist">
		<view class="product-title">超值兑换</view>
		<!-- <block v-for="(item, index) in couponNav" :key="index"> -->
		<view class="productItem">
			<!-- 优惠券图片 -->
			<view class="productImg">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
			</view>
			<!-- 优惠券介绍 -->
			<view class="productInfo">
				<text>积分兑券5元（满20元可用）</text>
				<text>100积分</text>
			</view>
			<!-- 去使用优惠券 -->
			<view class="productUsed">
				<text>兑换</text>
			</view>
		</view>
<!-- </block> -->
		<view class="productItem">
			<!-- 优惠券图片 -->
			<view class="productImg">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
			</view>
			<!-- 优惠券介绍 -->
			<view class="productInfo">
				<text>积分兑券20元（满50元可用）</text>
				<text>500积分</text>
			</view>
			<!-- 去使用优惠券 -->
			<view class="productUsed">
				<text>兑换</text>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	/* 积分精选 */
	.pointProductlist {
		margin: 20upx;
		background-color: #f0f0f0;
		/* border: solid 1upx black; */
		border-radius: 20upx;
	}
	.product-title {
		margin-left: 30upx;
		margin-top: 30upx;
	}
	.productItem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		margin: 20upx 30upx;
		padding: 20upx 20upx;
		background-color: #f0f0f0;
	
	}
	.productImg image {
		width: 160upx;
		border-radius: 10upx;
	}
	.productInfo text {
		display: block;
		margin: 20upx 0;
	}
	
	.productInfo > text:first-child {
		font-weight: bold;
	}
	.productInfo > text:nth-child(2) {
		color: #01e407;
		font-size: 25upx;
	}
	
	.productUsed {
		text-align: center;
		width: 100upx;
	}

	.productUsed > text:last-child {
		display: block;
		background-color: #5ac028;
		text-align: center;
		border-radius: 10upx;
		color: #fff;
	}
</style>