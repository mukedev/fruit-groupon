<template>
	<view class="wrap">
		<view class="trademark">
			
			<view class="search">
				<image src="../../../static/search.png" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="请输入商品名称" disabled>
			</view>
		</view>
		<view class="box">
			<scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
				<view class="box_left">
					<scroll-view scroll-y="true">
						<view class="box_left_item" v-for="(item,index) in title" :key="index" @click="tab(index)"
							:class="{'active':actives==index}">
							{{item}}
						</view>
					</scroll-view>
				</view>
				<view class="box_right">
					<view class="tu" v-for="(item,index) in imgUrl" :key="index" :class="actives == index?'tu1':'tu2'">
						<view class="actiid">
							<text>{{item.title}}</text>
							<view class="sort_select">
								<text style="margin-right: 40rpx;">综合</text>
								<text>价格</text>
							</view>
						</view>
						<scroll-view scroll-y="true" class="product-wrap" >
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
							<view class="product">
								<image src="../../../static/01.jpeg" mode="widthFix"></image>
								<view class="product-info">
									<text>白糖罂荔枝 约500g/份</text>
									<view class="add_cart">
										<text class="price">¥18.8</text>
										<uni-icons class="cart_icon" color="#fff" type="cart" size="13"></uni-icons>
									</view>
								</view>
							</view>
						</scroll-view>
						
						<!-- <view v-for="(imgItem,indexs) in item.imgs" :key="indexs" class="top_img">
							<image :src="imgItem" mode="aspectFit" @tap="SKUpreviewImage(imgItem,indexs)"></image>
						</view> -->
					</view>
				</view>
			</scroll-view>
 
		</view>
	</view>
 
</template>



<script>
	export default {
		data() {
			return {
				title: [
					"每日特价", "荔枝&樱桃", "热销爆款",
					"西瓜蜜瓜", "柑橘橙柚", "葡提枣李",
					"鲜果现切", "热带果/其它", "苹梨蕉芒",
					"零食饮品"
				],
				imgUrl: [
					{
						title: "每日特价",
						imgs: [
 
							"https://images.pexels.com/photos/9944370/pexels-photo-9944370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
							"https://images.pexels.com/photos/9558174/pexels-photo-9558174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
 
						]
 
					},
					{
						title: "荔枝&樱桃",
						imgs: [
				 
							"https://images.pexels.com/photos/9944370/pexels-photo-9944370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
							"https://images.pexels.com/photos/9558174/pexels-photo-9558174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
				 
						]
				 
					},
					{
						title: "热销爆款",
						imgs: [
									 
							"https://images.pexels.com/photos/9944370/pexels-photo-9944370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
							"https://images.pexels.com/photos/9558174/pexels-photo-9558174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
									 
						]
									 
					},
					{
						title: "西瓜蜜瓜",
						imgs: [
									 
							"https://images.pexels.com/photos/9944370/pexels-photo-9944370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
							"https://images.pexels.com/photos/9558174/pexels-photo-9558174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
									 
						]
									 
					},
					{
						title: "柑橘橙柚",
						imgs: [
									 
							"https://images.pexels.com/photos/9944370/pexels-photo-9944370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
							"https://images.pexels.com/photos/9558174/pexels-photo-9558174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
									 
						]
									 
					}
				],
				actives: 0,
				phone: 0
			}
		},
		methods: {
			tab(index) {
				this.actives = index;
			},
		    //点击不同的颜色，改变图片地址
		    	colorImg:function(img){
		    		//定义一个变量
		    		var me = this;
		    		me.imgUrl.imgs = img;  //点击当前的颜色替换成当前颜色的图片
		    	},
		    	//SKU里面的图片预览
		    	SKUpreviewImage:function(imgItem,indexs){
		    		//此方法传图片地址要数组的形式，所以定义一个数组，然后将内容push进去，再去做图片预览
		    		var arr = [];
		    		arr.push(imgItem);
		    		//uniapp预览轮播图方法
		    		uni.previewImage({
		    			current:indexs, //预览图片的下标
		    			urls:arr //预览图片的地址，必须要数组形式
		    		})
		    	},
		  
 
		},
		onLoad() {
 
		}
	}
</script>



<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}
 
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
 
	// 搜索
	.trademark {
		width: 100%;
		height: 136rpx;
		font-size: 32rpx;
		color: #fff;
		background: #ffffff;
	}
	.search-img {
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
		
	}
	.search {
		width: 62%;
		height: 76upx;
		line-height: 76upx;
		display: flex;
		align-items: center;
		margin-left: 2%;
		margin-top: 58upx;
		background-color: #e5e8ea;
		border-radius: 100rpx;
		
	}
	.search input {
		height: 76upx;
		line-height: 76upx;
		width: 100%;
		color: #666666;
	}
	
	
	
	.box {
		width: 100%;
		position: relative;
		flex: 1;
		font-size: 32rpx;
 
		.scrool-more {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
 
		// 左侧商品tab分类
		.box_left {
			width: 26%;
			height: 100%;
			// border-right: 1rpx solid #f3f3f3;
			// background: #F4F4F4;
			position: fixed;
			overflow: auto;
 
			.box_left_item {
				width: 100%;
				height: 100rpx;
				margin-top: 3rpx;
				background: #fff;
				text-align: center;
				line-height: 100rpx;
				// color: rgb(125, 125, 125);
			}
 
			.active {
				width: 100%;
				height: 100rpx;
				background: #18bc37;
				color: #fff;
			}
		}
		
		// 右侧商品
		.box_right {
			width: 74%;
			float: right;
			position: relative;
 
			.tu1 {
				display: block;
			}
 
			.tu2 {
				display: none;
			}
 
			.tu {
				.actiid {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28upx;
					
					position: fixed;
					height: 100upx;
					line-height: 100upx;
					width: 74%;
					top: 136upx;
					background: #fff;
					z-index: 100;
					border-bottom:  1upx solid #f0f0f0;
					// 更细的边框线
					// -webkit-transform: scaleY(.5);
					// transform: scaleY(.5);
					overflow: auto;

					
				}
				.actiid>text {
					color: #8f8f8f;
					margin-left: 20upx;
				}
				.sort_select {
					margin-right: 20upx;
				}
 
				.top_img {
					width: 100%;
 
					image {
						width: 200rpx;
						height: 200rpx;
						margin: 20rpx 30rpx;
					}
				}
 
			}
			
			.product-wrap {
				margin-top: 110upx;
			}
			
			.product {
				width: 100%;
				margin: 20upx 0;
				display: flex;
				align-items: center;
				height: 200rpx;
				position: relative; // 相对定位
				background: #fefefe;
				// border: solid 1upx black;
	
				// overflow: auto;
			}
			.product image{
				width: 30%;
				margin: 20rpx;
			}
			.product-info {
				width: 100%;
			}
			.product-info>text:first-child{
				position: absolute;
				top: 0;
				margin-top: 15upx;
				// border: solid 1upx black;
				
			}
			.add_cart {
				width: 70%;
				position: absolute;
				bottom: 0;
				margin-bottom: 15upx;

				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.price {
				color: #ff0000;
				font-size: 38rpx;
				font-weight: bold;
			}
			.price:first-letter {
				font-size: 28rpx;
				font-weight: normal;
			}
			.cart_icon {
				margin-right: 25upx;
				background: green;
				width: 50upx;
				height: 50upx;
				line-height: 50upx;
				text-align: center;
				border-radius: 25upx;
				
			}
			
		}
		
 
	}
</style>



