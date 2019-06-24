import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/index.scss'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
