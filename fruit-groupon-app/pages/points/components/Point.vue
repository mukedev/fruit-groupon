<template>
	<!-- 积分 -->
	<view class="container">
		<view class="parent-point">
			<view class="point">
				<text>30</text>
				<text>积分</text>
			</view>
			<text @click="openPointChange">积分兑换</text>
		</view>
		<view class="point-rule">
			<text>您有0积分将于2022-06-30失效</text>
			<a >查看清空规则</a>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			openPointChange() {
				uni.navigateTo({
					url: '/pages/pointchange/point_change'
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		margin: 20upx 25upx;
		background-color: #fff;
		/* border: solid 1upx black; */
		border-radius: 20upx;
	}
	.parent-point {
		margin: 0upx 35upx;
		margin-top: 40upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.point {
		color: #5ac028;
	}
	.point > text:first-child {
		font-size: 80upx;
	}
	.point > text:nth-child(2) {
		font-size: 30upx;
		font-weight: bold;
		margin-left: 5upx;
	}
	.parent-point > text:last-child {
		background-color: #5ac028;
		font-size: 32upx;
		color: #fff;
		border-radius: 10upx;
		width: 180upx;
		text-align: center;
		height: 60upx;
		line-height: 60upx;
	}
	
	/* 积分规则 */
	.point-rule {
		font-size: 35upx;
		color: #1e1e1d;
		margin: 0 35upx;
		padding-bottom: 40upx;
	}
	.point-rule a {
		color: #5ac028;
		/* 添加下划线 */
		text-decoration:underline;
		font-size: 30upx;
	}
	
</style>