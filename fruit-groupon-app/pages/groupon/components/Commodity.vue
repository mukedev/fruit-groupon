<template>
	<view class="commodity-page">
		<!-- 搜索 头部栏（一份起送 0配送费）-->
		<view class="commodity-search">
			<view class="search" @click="search()">
				<!-- uniapp 提供 widthFix 缩放图片  -->
				<image src="../../../static/search.png" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="车厘子">
			</view>
		</view>
		<!-- 商品 -->
		<view class="commodity-items">
			<view class="commodity-item" v-for="(item, index) in list" :key="index">
				<!-- 图片 -->
				<view class="comm-image">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<!-- 商品描述 价格 购买 -->
				<view class="comm-info">
					<text class="comm-desc">{{item.info}}</text>
					
					<text>配送时间：{{item.delivery}}</text>
					<view class="price">
						
						<text>¥{{item.price}}</text>
						<text class="gobuy">
							<text>已拼{{item.soldNum}}份</text>
							<text>马上抢</text>
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						image: '../../../static/01.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 523,
					},
					{
						image: '../../../static/02.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 481,
					},
					{
						image: '../../../static/01.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 442,
					},
					{
						image: '../../../static/04.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 208,
					},
					{
						image: '../../../static/03.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 176,
					},
					{
						image: '../../../static/05.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 23,
					},
					{
						image: '../../../static/02.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 18,
					},
					{
						image: '../../../static/01.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 16,
					},
					{
						image: '../../../static/04.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 13,
					},
					{
						image: '../../../static/01.jpeg',
						info:'A级-千禧小番茄-约250克',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 10,
					},
					{
						image: '../../../static/02.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 523,
					},
					{
						image: '../../../static/01.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 323,
					},
					{
						image: '../../../static/03.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 323,
					},
					{
						image: '../../../static/05.jpeg',
						info:'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						delivery: '今日可送',
						price: '23.8',
						soldNum: 53,
					},
				]
			}
		}
	}
</script>

<style>
	/* 全局 */
	.commodity-page {
		margin: 0 20upx;
		/* background:#f0f0f0; */
	}
	/* 搜索 */
	.search-img {
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
	}
	.search {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background-color: #eff3f4;
		border-radius: 100rpx;
		margin-bottom: 20upx;
		border: solid 1upx gold;
		
	}
	.search input {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		color: #666666;
	}
	.commodity-search {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		align-items: center;
	}
	
	/* 商品 */
	.comm-image image{
		height: 250upx;
		width: 100%;
		border-radius: 30upx 30upx 0 0;
	}
	.commodity-item {
		margin: 20upx 0;
		border-radius: 26upx;
		background-color: #ffffff;
	}
	.comm-desc {
		font-size: 30upx;
		font-weight: bold;
	}
	.comm-info {
		margin: 5upx 20upx;
	}
	.comm-info text{
		margin: 5upx 0;
		font-size: 25upx;
		display: block;
	}
	.price {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.price > text:first-child {
		font-size: 40upx;
		color: #ff0000;
	}
	.gobuy {
		background-color: #62d52b;
		padding: 0 20upx;
		border-radius: 20upx;
		text-align: center;
		color: #ffffff;
	}
	.gobuy text:first-child {
		font-size: 20upx;
	}
	.gobuy text:nth-child(2) {
		font-size: 27upx;
	}
</style>