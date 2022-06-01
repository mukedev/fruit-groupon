<template>
	<view class="">
		<view class="sale-state">
			<text>正在抢购中</text>
			<text>距本场结束：00:27:36</text>
		</view>
		<view class="commodity-items">
			<view class="commodity-item" v-for="(item, index) in list" :key="index">
				<image :src="item.image" mode="aspectFill"></image>
				<view class="comm-info">
					<text>{{item.info}}</text>
					<text>规格：{{item.amount}}{{item.unit}}</text>
					<view class="uni-padding-wrap uni-common-mt">
						<view class="progress-box">
							<progress :percent="item.soldOut"  
							stroke-width="7" 
							border-radius="10" >仅剩{{100-item.soldOut}}%</progress>
						</view>
					</view>
					<view class="price-parent">
						<text class="price">¥{{item.price}}</text>
						<text>抢</text>
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
				list:[
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 20,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 65,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 77,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 88,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 99,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 20,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 30,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 88,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 20,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 33,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 40,
						price: 4.99
					},
					{
						image: '../../../static/01.jpeg',
						info: '水果优团10元优惠券（满25元可用）',
						amount: 500,
						unit: 'g',
						soldOut: 20,
						price: 4.99
					},
				]
			}
		},
		methods: {
			setProgress() {
				this.pgList = 30
			},
			clearProgress() {
				this.pgList = 0
			}
		}
	}
</script>

<style scoped>
	/* 秒杀状态 */
	.sale-state {
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 10upx 30upx;
	}
	
	/* 商品 */
	.commodity-item image{
		width: 50%;
		height: 100%;
	}
	.commodity-item{
		margin: 20upx;
		padding: 20upx;
		height: 260upx;
		display: flex;
		font-size: 30upx;
		background-color: #fff;
		border-radius: 10upx;
	}
	.comm-info {
		height: 100%;
		padding: 0 8upx;
	}
	.comm-info > text:nth-child(2) {
		font-size: 20upx;
		display: block;
		margin: 10upx 0;
	}
	
	/* 进度条 */
	.progress-box {
		/* display: flex; */
		height: 30rpx;
		width: 80%;
		font-size: 20upx;
	}
	.price-parent {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 20upx;
		margin-top: 30upx;
		font-size: 30upx;
		
	}
	.price {
		color: #ff0000;
		font-size: 38upx;
		font-weight: bold;
	}
	.price:first-letter {
		font-size: 28upx;
	}
	.price-parent text:nth-child(2) {
		color: #fff;
		border-radius: 100upx;
		width: 100upx;
		background-color: #5ac028;
		text-align: center;
	}

</style>