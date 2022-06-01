<!-- 可以与购物车复用此组件 -->
<template>
	<!-- 购物车导航： 今日送达，预约下单 -->
	<view class="navList">
		<block v-for="(item, index) in listNav" :key="index">
			<text :class="{activetext:index == num}" @click="menubar(index)">{{item}}</text>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				listNav: ['全部', '待付款', '待配送', '已送达', '退款' ],
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
	.navList {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 5%;
		height: 50upx;
		line-height: 50upx;
		background-color: #fff;
	}
	.navList text {
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
	
</style>