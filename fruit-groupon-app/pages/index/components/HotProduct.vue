<template>
<view class="hot-prod">
	<view class="hot-title">
		<text class="first-title">优品推荐</text>
		<text class="second-title">特惠拼团</text>
	</view>
	<view class="product-list">
		<view class="product-item" v-for="(item, index) in list" :key="index">
			<view>
				<image :src="item.objImg" mode="widthFix"></image>
			</view>
			<view class="prod-desc">
				<text>{{item.desc}}</text>
			</view>
			<view class="prod-stock">
				<text>配送：{{item.delivery}}</text>
				<text>库存：{{item.stock}}</text>
			</view>
			<view class="prod-price">
				<text class="price">¥{{item.price}}</text>
				<text class="prod-buy">购买</text>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						id:'1',
						objImg: '../../../static/01.jpeg',
						desc: 'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						price: '3.99',
						delivery: '当日可送',
						stock: 234	
					},
					{
						id:'2',
						objImg: '../../../static/02.jpeg',
						desc: 'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						price: '2.98',
						delivery: '当日可送',
						stock: 554	
					},
					{
						id:'3',
						objImg: '../../../static/03.jpeg',
						desc: 'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						price: '10',
						delivery: '当日可送',
						stock: 200	
					},{
						id:'4',
						objImg: '../../../static/04.jpeg',
						desc: 'A级-千禧小番茄-约250克',
						price: '15.10',
						delivery: '当日可送',
						stock: 999	
					},
					{
						id:'5',
						objImg: '../../../static/05.jpeg',
						desc: 'A级-千禧小番茄-约250克（提货期间每人每日限提一份，超重会员价补差价）',
						price: '3.99',
						delivery: '次日可送',
						stock: 321	
					}
				]
			}
		}
	}
</script>

<style scoped>
	
	.hot-prod {
		margin: 0 20upx;
	}
	/* 标题 */
	.hot-title {
		margin-top: 30upx;
		margin-bottom: 5upx;
	}
	.hot-title text{
		display: block;
	}
	.first-title {
		font-size: 30upx;
		font-weight: bolder;
		margin-left: 10upx;
		margin-top: 20upx;
	}
	.second-title {
		font-size: 25upx;
		border: solid 1upx;
		width: 120upx;
		margin-left: 3upx;
		color: white;
		background-color: #51AC25;
		border-radius: 100upx;
		align-content: center;
		text-align: center; /* 因为是个block align-content失效*/
	}
	
	/* 商品 */
	.product-list {
		display: flex;
		flex-wrap: wrap; /* 让弹性盒元素在必要的时候拆行 */
	}
	.product-item {
		background-color: #FFFFFF;
		padding: 10upx 10upx 20upx 10upx;
		margin: 10upx 5upx;
		border-radius: 10upx;
		width: calc((100%/2) - 4%) !important;
		position: relative;
		text-align: center;
		
	}
	.product-item image {
		width: 100%;
	}
	.prod-desc{
		text-align: left;
		line-height: 33upx;
		margin-bottom: 18upx;
	}
	.prod-desc text{
		font-size: 30upx;
		line-height: 1upx;
	}
	.prod-price {
		font-size: 30upx;
		/* 两端对齐 */
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 5upx;
	}
	.price {
		color: #ff0000;
	}
	.prod-stock text{
		font-size: 25upx;
		text-align: left;
		display: block;
	}
	.prod-stock {
		margin-bottom: 30upx;
	}
	.prod-buy {
		width: 70upx;
		color: white;
		font-size: 23upx;
		border-radius: 100upx;
		background-color: #62d52b;
	}
	
</style>