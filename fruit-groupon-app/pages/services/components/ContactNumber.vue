<!-- 联系电话 -->
<template>
	<view class="wrap">
		<view class="contact_time">
			<text>联系电话</text>
			<text>客服时间：08:30-21:00</text>
		</view>
		<uni-icons class="phone" color="#fff" type="phone" size="15"></uni-icons>
	</view>
</template>

<script>
</script>

<style scoped>
	.wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 30upx 20upx 20upx;
		background-color: #fff;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
	}
	.contact_time text{
		display: block;
	}
	.contact_time>text:first-child {
		font-size: 32upx;
	}
	.contact_time>text:nth-child(2) {
		font-size: 25upx;
		color: #a9a9a9;
	}
	.phone {
		background: #38ae70;
		width: 70upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 35upx;
		text-align: center;
	}
</style>