<!-- 微信二维码图片 -->
<template>
	<view class="wrap">
		<text>扫码入群，享更多优惠福利</text>
		<view class="code">
			<image src="../../../static/code.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.wrap {
		margin: 20upx;
		height: 500upx;
		background-color: #fff;
		border-radius: 30upx;
	}
	.wrap text {
		height: 80upx;
		display: block;
		line-height: 80upx;
		font-size: 32upx;
		text-align: center;
	}
	.code {
		text-align: center;
	}
	.code image{
		width: 40%;
		
	}
</style>