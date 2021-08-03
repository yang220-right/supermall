import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

Vue.config.productionTip = false
// 添加时间总线
Vue.prototype.$bus = new Vue()
// 使用插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
