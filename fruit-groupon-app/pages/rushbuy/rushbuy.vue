<!-- 秒杀 -->
<template>
	<view>
		<FlashSale></FlashSale>
	</view>
</template>

<script>
	// 引入组件
	import FlashSale from './components/FlashSale.vue'
	
	export default {
		components: {
			FlashSale
		}
	}
	
	// export default {
	// 		data() {
	// 			return {
	// 				pgList: 0
	// 			}
	// 		},
	// 		methods: {
	// 			setProgress() {
	// 				this.pgList = 20
	// 			},
	// 			clearProgress() {
	// 				this.pgList = 0
	// 			}
	// 		},
	// 		computed: {
				
	// 		}
		// }
</script>

<style>
	/* Vue的bug 小程序改背景颜色需要在这里声明这个样式 */
	page{  
	        background:#f0f0f0;  
	    }
</style>