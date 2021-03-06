import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import VScrollLock from 'v-scroll-lock'
import VueSweetalert2 from 'vue-sweetalert2';


library.add(fas, fab,far)
Vue.use(VScrollLock)
Vue.use(VueSweetalert2)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
