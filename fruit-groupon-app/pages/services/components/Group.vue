<!-- 添加微信群 -->
<template>
	<view class="wrap" @click="openWeChatCode">
		<text>添加小区微信群</text>
		<uni-icons class="forward" color="#a9a9a9" type="forward" size="15"></uni-icons>
	</view>
</template>

<script>
	export default {
		methods: {
			openWeChatCode() {
				uni.navigateTo({
					url: '/pages/wechatcode/wechat_code'
				})
			}
		}
	}
</script>

<style scoped>
	.wrap {
		margin: 20upx 0;
		height: 80upx;
		line-height: 80upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 30upx 20upx 20upx;
		background-color: #fff;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
		font-size: 32upx;

	}
</style>