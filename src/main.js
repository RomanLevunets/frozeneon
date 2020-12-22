// utils
// eslint-disable-next-line import/no-duplicates
import './utils/plugins'

import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'

// eslint-disable-next-line import/no-duplicates
import { vuetify } from './utils/plugins'

// vue configs
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
