<!-- 购物车商品列表 -->
<template>
	
	<scrool-view scroll-y="true">
		<view class="wrap">
			<!-- 购物车商品 -->
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="product-content">
				<checkbox :checked="isChecked" @click="isChecked=!isChecked" />
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<view class="product-info">
					<text>麒麟瓜 约3斤/份（非整个）</text>
					<view class="product-buy">
						<text>¥ 12.8</text>
						<view class="product-num">
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scrool-view>
	
</template>

<script>
	export default {
		data() {
			return {
				isChecked: true
			}
		}
	}
</script>

<style scoped>
	.wrap {
		background-color: #fff;
		margin: 20upx 0 400upx 0;
	}
	.product-content {
		display: flex;
		align-items: center;
		justify-content: left;
		padding-left: 16upx;
		margin: 40upx 0upx;
		background: #fff;
		
	}
	.product-info {
		/* border: solid 1upx black; */
		margin-left: 20upx;
		width: 60%;
	}
	.product-info > text:nth-child(1) {
		font-size: 28upx;
	}
	.product-content image{
		width: 25%;
	}
	.product-buy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* border: solid 1upx black; */
		margin-top: 40upx;
		
	}
	.product-buy > text:nth-child(1) {
		color: #ff0000;
	}
	.product-num {
		background-color: #f0f0f0;
		width: 150upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* padding: 0 16upx; */
		border-radius: 100upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
	}
	
	.product-num > text:nth-child(1){
		border-radius: 50%;
		background-color: #fff;
		width: 50upx;
		border: 1upx solid #009300;
	}
	.product-num > text:nth-child(3){
		border-radius: 50%;
		background-color: #009300;
		width: 50upx;
		color: #fff;
	}
</style>