<template>
	<!-- 联系客服 -->
	<view class="">
		<ContactNumber></ContactNumber>
		<Group></Group>
	</view>
	
</template>

<script>
	// 引入组件
	import ContactNumber from './components/ContactNumber.vue'
	import Group from './components/Group.vue'
	
	export default {
		components: {
			ContactNumber,
			Group,
		}
	}
</script>

<style>
	page {
		background: #f4f4f4;
	}
</style>