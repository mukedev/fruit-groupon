<!-- 账户余额（钱包） -->
<template>
	<!-- 账户 -->
	<view>
		<AccountBalance></AccountBalance>
		<RechargeAmount></RechargeAmount>
		<RechargeSubmit></RechargeSubmit>
	</view>
	
</template>

<script>
	// 引入组件
	import AccountBalance from './components/AccountBalance'
	import RechargeAmount from './components/RechargeAmount'
	import RechargeSubmit from './components/RechargeSubmit'
	
	export default {
		components: {
			AccountBalance,
			RechargeAmount,
			RechargeSubmit,
		}
	}
</script>

<style>
	page {
		background: #f4f4f4;
	}
</style>