import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock_data from './mock_data'
import require_data from './require_data'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
