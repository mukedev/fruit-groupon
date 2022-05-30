<template>
	<view class="userInfo">
		<!-- 头像，头像点击可编辑个人信息 -->
		<image src="../../../static/bilibili_head.png" mode="widthFix"></image>
		<view class="info">
			<!-- 昵称 -->
			<text>小白</text>
			<!-- 手机号码 -->
			<text>173****9902</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.userInfo image {
		width: 160upx;
		border-radius: 100%;
		margin: 0 10upx;
	}
	.userInfo {
		display: flex;
		
	}
	.info text {
		display: block;
		margin: 20upx 25upx;
	}
	.info text:first-child {
		font-weight: bold;
	}
	.info text:nth-child(2) {
		font-size: 28upx;
	}
</style>