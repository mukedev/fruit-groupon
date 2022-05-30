<template>
	<!-- 广告词+营销轮播图 -->
	<view class="ad-word">
		<view class="word-group">
			<view class="left-line"></view>
			<text class="word-cont">甄 选 品 质 ∙ 新 鲜 日 达</text>
			<view class="right-line"></view>
		</view>
		
		
		<view class="ad-img">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" 
				:interval="interval"
				:duration="duration">
				<swiper-item v-for="img in adImgs" >
					<view class="swiper-item uni-bg-red">
						<image :src="img" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
		<view class="fast-nav" >
			<view class="nav-icon">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<text>配送到家</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<text>充值送券</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<text>超值拼团</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<text>限时秒杀</text>
			</view>
			<view class="nav-icon">
				<image src="../../../static/01.jpeg" mode="widthFix"></image>
				<text>积分兑换</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
	    data() {
			return {
				adImgs: [
					'../../../static/01.jpeg',
					'../../../static/02.jpeg',
					'../../../static/03.jpeg',
					'../../../static/04.jpeg',
					'../../../static/05.jpeg',
				],
				indicatorDots: true, //显示面板指示点
				autoplay: true,
				interval: 2000,
				duration: 500
			}
	    },
	    methods: {
	        
	    }
	}
</script>

<style scoped>
	/* 广告词 */
	.ad-word {
		font-size: 25upx;
		text-align-last: center;
		margin: 10upx 0;
		padding: 0 20upx;
	}
	.word-group {
		/* 两端对齐 */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.word-cont {
		color: #5ac028;
	}
	.left-line {
		width: 0;
		height: 0;
		border: 1px solid transparent;
		border-right: 50px solid rgb(46, 240, 7);
		border-radius: 5px;
	}
	.right-line {
		width: 0;
		height: 0;
		line-height: 0;
		border: 1px solid transparent;
		border-left: 50px solid rgb(46, 240, 7);
		border-radius: 5px;
		
	}

	/* 轮播 */
	.ad-img {
		border-radius: 16upx;
		margin: 15upx 0;
	}
	.swiper-item image {
		border-radius: 16upx;
		width: 100%;
		height: 100%;
	}
	.swiper {
		/* 设置滚动框的高度 */
		height: 280upx; 
		border-radius: 16upx;
	}
	.swiper-item {
		border-radius: 16upx;
		display: block;
		width: 100%;
		height: 280upx;
		line-height: 100%;
		text-align: center;
	}
	
	/* 快速导航栏 */
	.fast-nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-icon {
		margin: 20upx 3%;
		width: 100upx;
	}
	.fast-nav image {
		width: 100upx;
		height: 100upx;
		border-radius: 50%; 
	}
	.fast-nav text {
		font-size: 20upx;
		display: block;
		text-align-last: center;
	}
</style>