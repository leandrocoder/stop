import Vue from 'vue'
//import App from './App.vue'
import router from './router'
import store from './store'
import Stop from './views/Stop.vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Stop)
}).$mount('#app')
