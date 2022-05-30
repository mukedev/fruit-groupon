<template>
	<!-- 优惠券 -->
	<!-- 
		todo:
			标题：我的优惠券(3)
	 -->
	 <view class="container">
		 <view class="couponList">
		 	<block v-for="(item, index) in couponNav" :key="index">
		 		<text :class="{activetext:index == num}" @click="menubar(index)">{{item}}</text>
		 	</block>
		 </view>
		 <view class="mybkkd">
			 
		 </view>
		 <view class="list">
		 	<!-- <block v-for="(item, index) in couponNav" :key="index"> -->
		 		<view class="couponItem">
					<!-- 优惠券图片 -->
					<view class="couponImg">
						<image src="../../../static/01.jpeg" mode="widthFix"></image>
					</view>
					<!-- 优惠券介绍 -->
					<view class="couponInfo">
						<text>【新用户专享】5元抵扣券</text>
						<text>限2022.05.12～2022.06.11使用</text>
					</view>
					<!-- 去使用优惠券 -->
					<view class="couponUsed">
						<view class="couponValue">
							<text>¥5</text>
							<text>满30元可用</text>
						</view>
						<text>去使用</text>
					</view>
				</view>
		 	<!-- </block> -->
			
			<view class="couponItem">
				<!-- 优惠券图片 -->
				<view class="couponImg">
					<image src="../../../static/01.jpeg" mode="widthFix"></image>
				</view>
				<!-- 优惠券介绍 -->
				<view class="couponInfo">
					<text>【vip专享】50元抵扣券</text>
					<text>限2022.05.12～2022.06.11使用</text>
				</view>
				<!-- 去使用优惠券 -->
				<view class="couponUsed">
					<view class="couponValue">
						<text>¥50</text>
						<text>满100元可用</text>
					</view>
					<text>去使用</text>
				</view>
			</view>
		 </view>
	 </view>
	
</template>

<script>
	export default {
		data(){
			return {
				num: 0,
				couponNav: ['未使用(3)', '已过期'],
			}
		},
		methods: {
			menubar(index) {
				this.num = index
			}
		}
	}
</script>

<style scoped>
	/* 头部导航栏 */
	.couponList {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 23%;
		/* border: solid 1upx black; */
		height: 50upx;
		line-height: 50upx;
		background-color: #fff;
		/* margin-bottom: 15upx; */
	}
	.couponList text {
		/* border: solid 1upx black; */
		display: block;
		height: 100upx;
		line-height: 100upx;
		color: #666666;
		font-size: 35upx;
	}
	.activetext {
		color: #333333 !important;
		font-weight: bold !important; 
		border-bottom: 5upx solid #ffd161;
	}
	
	/* 优惠券 */
	.couponItem {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		margin: 20upx 30upx;
		padding: 20upx 20upx;
		background-color: #fff;
	
	}
	.couponImg image {
		width: 160upx;
		border-radius: 10upx;
	}
	.couponInfo text {
		display: block;
		margin: 20upx 0;
	}
	
	.couponInfo > text:first-child {
		font-weight: bold;
	}
	.couponInfo > text:nth-child(2) {
		color: #929292;
		font-size: 25upx;
	}
	
	.couponUsed {
		text-align: center;
	}
	
	.couponUsed text {
		display: block;
	}
	.couponValue {
		font-size: 20upx;
		margin: 0upx;
		padding: 0upx;
	}
	.couponValue text:first-child {
		font-size: 45upx;
		color: #ff0000;
	}
	.couponValue text:last-child {
		margin-top: -10upx;
		color: #ff0000;
		margin-bottom: 15upx;
	}
	.couponUsed > text:last-child {
		background-color: #5ac028;
		text-align: center;
		border-radius: 10upx;
		color: #fff;
	}
</style> 