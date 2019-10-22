import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEye, faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
