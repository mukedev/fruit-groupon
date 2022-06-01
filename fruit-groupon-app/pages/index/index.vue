<template>
	<view class="contenting">
		<Search></Search>
		<Advertising></Advertising>
		<Publicity></Publicity>
		<HotProduct></HotProduct>
	</view>
</template>

<script>
	//引入子组件
	import Search from './components/Search.vue'
	import Advertising from './components/Advertising.vue'
	import Publicity from './components/Publicity.vue'
	import HotProduct from './components/HotProduct.vue'
	
	export default {
		components:{
			Search,
			Advertising,
			Publicity,
			HotProduct
		},
		data() {
			return {
				title: '主页'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	/* 
	 
	 */
	
	.contenting {
		/* margin: 0px 20upx; */
	}
	/* Vue的bug 小程序改背景颜色需要在这里声明这个样式 */
	page{  
		/* background: #f0f0f0; */
		background:#f4f4f4; 
	}
</style>
