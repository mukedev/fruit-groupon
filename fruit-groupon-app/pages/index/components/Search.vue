<template>
	<!-- 
		todo: 
			1.地址后面滚动下单成功！
			2.点击搜索跳转到搜索页面
			3.顶部下拉时跟随下移
	 -->
	
	<!-- 收货地址+搜索+头部导航栏 -->
	<view class="search-global">
		<!-- 收货地址 -->
		<view class="search-view" @click="openAddress">
			
			<!-- <image src="../../../static/position.png" mode="widthFix"></image> -->
			<uni-icons class="address-icon" type="location" color="#ebeaeb" size="13"></uni-icons>
			<text class="search-text">花盛小区1栋1单元1504室</text>
			<uni-icons  class="address-icon" type="bottom" color="#ebeaeb" size="13"></uni-icons>
		</view>
	
		<!-- 搜索 -->
		<view class="search-cont">
			<view class="search">
				<!-- uniapp 提供 widthFix 缩放图片  -->
				<image src="../../../static/search.png" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="请输入商品名称" disabled>
			</view>
		</view>
		<!-- 头部导航栏 -->
		<view class="search-nav">
			<view class="nav-icon" @click="openRecharge">
				<image src="../../../static/wallet1.png" mode="widthFix"></image>
				<text>充值</text>
			</view>
			<view class="nav-icon" @click="openCoupon">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>优惠券</text>
			</view>
			<view class="nav-icon" @click="openOrder">
				<image src="../../../static/giftcard.png" mode="widthFix"></image>
				<text>订单</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openAddress() {
				uni.navigateTo({
					url:'/pages/address/address'
				})
			},
			openCoupon() {
				uni.navigateTo({
					url:'/pages/coupon/coupon'
				})
			},
			openRecharge() {
				uni.navigateTo({
					url: '/pages/wallet/wallet'
				})
			},
			openDistribution() {
				uni.navigateTo({
					url: '/pages/distribution/distribution'
				})
			},
			openOrder() {
				uni.navigateTo({
					url: '/pages/order/order'
				})
			},
			
		}
	}
</script>

<style scoped>
	/* search全局样式 */
	.search-global {
		background-color: #18bc37;
		color: #f6f6f7 ;
		font-size: 25upx;
	}
	
	/* 收货地址 */
	.search-view > image {
		width: 35upx;
		height: 35upx;
		margin-left: 3%;
		
	}
	.search-view {
		/* 并排排列 */
		display: flex;
		align-items: center;
		background: #4bd441; 
		margin-bottom: 20upx;
		margin-left: 20upx;
	
		height: 46upx;
		line-height: 46upx;
		border-radius: 23upx;

		width: max-content;
		max-width: 60%;
		
		/* overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: normal; */
	
	}
	.address-icon {
		margin-right: 5upx;
		margin-left: 10upx;
	}
	
	/* 搜索 */
	.search-img {
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
		
	}
	.search {
		height: 60upx;
		line-height: 60upx;
		width: 96%;
		display: flex;
		margin-left: 2%;
		background-color: #e5e8ea;
		border-radius: 100rpx;
	}
	.search input {
		height: 60upx;
		line-height: 60upx;
		width: 100%;
		color: #666666;
	}
	.search-cont {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		align-items: center;
		/* border: solid 1upx black; */
	}
	
	/* 头部导航栏 */
	.search-nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-icon {
		margin: 2% 5%;
	}
	.search-nav image {
		width: 100upx;
		height: 100upx;
		display: flex;
	}
	.search-nav text {
		display: block;
		text-align-last: center;
	}
	
	
</style>