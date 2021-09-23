import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import i18n from './i18n'
Vue.config.productionTip = false

new Vue({
  VueI18n,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
