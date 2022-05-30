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
		<view class="search-view">
			<image src="../../../static/position.png" mode=""></image>
			<text class="search-text">花盛小区1栋1单元1504室</text>
			<text>v</text>
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
			<view class="nav-icon">
				<image src="../../../static/vipqr.png" mode="widthFix"></image>
				<text>未命名</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/wallet1.png" mode="widthFix"></image>
				<text>充值</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/coupon.png" mode="widthFix"></image>
				<text>优惠券</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/giftcard.png" mode="widthFix"></image>
				<text>待配送</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* search全局样式 */
	.search-global {
		background-color: #5ac028;
		color: #f6f6f7 ;
		font-size: 25upx;
	}
	
	/* 收货地址 */
	.search-view image {
		width: 35upx;
		height: 35upx;
		margin-left: 3%;
	}
	.search-view {
		/* 并排排列 */
		display: flex; 
		align-items: center;
		height: 80upx;
	}
	.search-text {
		padding: 0 10upx;
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