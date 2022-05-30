<template>
	<!-- 收货地址 -->
	<view class="container">
		<view class="address-content">
			<view class="address">
				<text>湖南省 长沙市 开福区 珠江花城 花盛 1栋1单元1203</text>
				<text>小白  175****5536</text>
			</view>
			<image src="../../../static/images/point/23.png" mode="widthFix"></image>
		</view>
		<view class="address-content">
			<view class="address">
				<text>湖南省 长沙市 开福区 珠江花城 花盛 1栋1单元1203</text>
				<text>小白  175****5536</text>
			</view>
			<image src="../../../static/images/point/23.png" mode="widthFix"></image>
		</view>
		<view class="address-content">
			<view class="address">
				<text>湖南省 长沙市 开福区 珠江花城 花盛 1栋1单元1203</text>
				<text>小白  175****5536</text>
			</view>
			<image src="../../../static/images/point/23.png" mode="widthFix"></image>
		</view>
		
		<view class="addAddress">
			<text>新增收货地址</text>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	/* .container {
		
	} */
	.address-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		margin: 20upx;
		padding: 20upx;
	}
	.container image {
		width: 120upx;
	}
	.address text {
		display: block;
		font-size: 35upx;
		margin-bottom: 10upx;
		
	}
	.address > text:nth-child(2) {
		color: #9b9b9b;
	}
	
	/* 新增收货地址 */
	.addAddress {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		position: fixed;
		bottom: 0;
		background: seagreen;
		text-align: center;
		color: #fff;
	}
</style>