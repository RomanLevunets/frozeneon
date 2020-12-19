// utils
// eslint-disable-next-line import/no-duplicates
import './utils/plugins'
import './utils/translations'

import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'

// eslint-disable-next-line import/no-duplicates
import { vuetify } from './utils/plugins'

// vue configs
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})

Vue.initI18nManager().then(() => {
  app.$mount('#app')
})
