<!-- 充值提交组件 -->
<template>
	<view class="container">
			<view>
				<label class="radio">
					<radio value="r1" checked="true" class="radio-size" />我已阅读并同意
				</label>
				<a>《充值说明》</a>
			</view>
			<button type="primary">立即充值¥100.00</button>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		width: 100%;
		height: 200upx;
		padding-top: 70upx;
		position: fixed;
		bottom: 0;
		background: #fff;
		text-align: center;
		font-size: 25upx;
	}
	.radio-size {
		 transform: scale(0.6,0.6);
	}
	.container a {
		display: inline;
		color: #00a300;
	}
	.container button {
		width: 95%;
		height: 80upx; 
		line-height: 80upx;
		border-radius: 40upx;
	}
</style>