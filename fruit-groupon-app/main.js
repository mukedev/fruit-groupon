import App from './App'
import Cabloy from './js_sdk/cabloy-sdk'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

// 初始化cabloy
const cabloyOptions = {
	base: {
		scene: 'default',
		locale: 'en-us'
	},
	api: {
		baseURL: 'http://catyy.site'
	}
}
Vue.prototype.$cabloy = Cabloy(Vue, cabloyOptions)

// 登录
Vue.prototype.$cabloy.util.login().then(res => {
  // 由于 login 是网络请求，可能会在 Page.onLoad 之后才返回
  // 所以此处加入 callback 以防止这种情况
  if (Vue.prototype.$cabloy.__loginReadyCallback) {
    Vue.prototype.$cabloy.__loginReadyCallback(res);
  }
}).catch(err => {
  console.log(err)
})

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif