import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollmagic from 'vue-scrollmagic'


Vue.config.productionTip = false
Vue.prototype.bus = new Vue();

Vue.use(VueScrollmagic)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
