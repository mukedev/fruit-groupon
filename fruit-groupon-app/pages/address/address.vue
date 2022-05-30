<template>
	<!-- 收货地址 -->
	<AddressList></AddressList>
</template>

<script>
	// 引入组件
	import AddressList from './components/AddressList.vue'
	
	export default {
		components: {
			AddressList
		},
		data() {
			
		}
	}
</script>

<style>
	page {
		background: #f0f0f0;
	}
</style>