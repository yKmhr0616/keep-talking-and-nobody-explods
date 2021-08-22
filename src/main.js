import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {BootstrapVue} from 'bootstrap-vue' // add

import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.use(BootstrapVue) // add
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
