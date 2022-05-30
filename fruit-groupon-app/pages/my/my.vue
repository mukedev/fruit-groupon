<template>
	<view class="container">
		<UserInfo></UserInfo>
		<Wallet></Wallet>
		<Vip></Vip>
		<Order></Order>
		<Service></Service>
	</view>
</template>
	
<script>
	// 引入组件
	import UserInfo from './components/UserInfo.vue'
	import Wallet from './components/Wallet.vue'
	import Vip from './components/Vip.vue'
	import Order from './components/Order.vue'
	import Service from './components/Service.vue'
	
	export default {
		components: {
			UserInfo,
			Wallet,
			Vip,
			Order,
			Service,
		}
	}
	
</script>
	
<style>
	page{
	        background:#f0f0f0;  
	    }
</style>