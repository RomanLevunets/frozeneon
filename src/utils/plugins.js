import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Toasted from 'vue-toasted'
// use
Vue.use(Toasted)
Vue.use(Vuetify)

export const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1d1d1d',
        blue: '#404040',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        'blue-grey': '#607D8B'
      },
      dark: {
        primary: '#444444',
        'blue-grey': '#000'
      }
    }
  }
})
