<!-- 新增地址 -->
<template>
	<view class="container">
		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="收货人姓名" />
					</uni-forms-item>
					<uni-forms-item label=" ">
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="手机号码" required name="phone">
						<uni-easyinput v-model="valiFormData.phone" placeholder="收货人手机号码" />
					</uni-forms-item>
					<uni-forms-item label="小区" required name="housingEstate">
						<uni-section title="本地数据" type="line" padding style="height: calc(100vh - 100px);">
							<uni-data-picker placeholder="请选择收货小区" popup-title="请选择收货小区" :localdata="dataTree" v-model="valiFormData.housingEstate"
								@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
							</uni-data-picker>
						</uni-section>
					</uni-forms-item>
					<uni-forms-item label="门牌号" required name="houseNumber">
						<uni-easyinput v-model="valiFormData.houseNumber" placeholder="例如：2栋1单元1502" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">保存</button>
			</view>
		</uni-section>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseFormData: {
					sex: 1,
				},
				// 校验表单数据
				valiFormData: {
					name: '',
					phone: '',
					housingEstate: '',
					houseNumber: ''
				},
				// 单选数据源
				sexs: [{
					text: '先生',
					value: 0
				}, {
					text: '女士',
					value: 1
				}],
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '手机号不能为空'
						}, {
							format: 'number',
							errorMessage: '手机号只能输入数字'
						}]
					},
					housingEstate: {
						rules: [{
							required: true,
							errorMessage: '收货小区不能为空'
						}]
					},
					houseNumber: {
						rules: [{
							required: true,
							errorMessage: '门牌号不能为空'
						}]
					}
				},
				
				// 地址级联
				classes: '1-2',
				dataTree: [
				{
					text: "开福区",
					value: "1-0",
					children: [
					{
						text: "珠江花城花盛",
						value: "1-1"
					},
					{
						text: "珠江花城扶水岸",
						value: "1-2"
					},
					{
						text: "珠江花城锦里",
						value: "1-3"
					},
					{
						text: "珠江花城桂苑",
						value: "1-4"
					},
					{
						text: "珠江郦城",
						value: "1-5"
					},
					{
						text: "万国城1期",
						value: "1-6"
					},
					{
						text: "万国城2期",
						value: "1-7"
					},
					{
						text: "万国城MOMA-3期",
						value: "1-8"
					},
					]
				},
				],
			}
		},
		computed: {
			// 处理表单排列切换
			alignment() {
				if (this.current === 0) return 'left'
				if (this.current === 1) return 'top'
				return 'left'
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.customForm.setRules(this.customRules)
		},
		methods: {
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			add() {
				this.dynamicLists.push({
					label: '域名',
					rules: [{
						'required': true,
						errorMessage: '域名项必填'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			// 级联方法
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			},
						
		}
	}
</script>

<style lang="scss">

	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>