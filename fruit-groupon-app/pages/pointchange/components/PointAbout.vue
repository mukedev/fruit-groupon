<template>
	<view class="container">
		<view class="myPoint">
			<text>我的积分</text>
			<text>30</text>
		</view>
		<view class="point-items">
			<block v-for="(item, index) in pointNav" :key="index">
				<view class="point-item" @click="menubar(item.type)">
					<image :src="item.image" mode="widthFix"></image>
					<text>{{item.title}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				pointNav: [
					{
						type: 1,
						image: '../../../static/images/point/24.png',
						title: '积分明细'
					},
					{
						type: 2,
						image: '../../../static/images/point/23.png',
						title: '兑换记录'
					},
					{
						type: 3,
						image: '../../../static/images/point/22.png',
						title: '积分规则'
					}
				]
			}
		}
	}
</script>

<style scoped>
	/* 我的积分 */
	.myPoint {
		/* border: solid 1upx black; */
		border-bottom: solid 1upx #a4a4a4;
		height: 200upx;
		text-align:  center;
		padding-top: 30upx;
	}
	.myPoint text{
		display: block;
	}
	.myPoint > text:nth-child(2) {
		 font-size: 80upx;
	}
	
	/* 积分按钮 */
	.point-items {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.point-item image {
		width: 45upx;
	}
	.point-item text {
		display: block;
		font-size: 30upx;
	}
	.point-item {
		text-align: center;
		margin: 30upx 45upx;
	}
</style>