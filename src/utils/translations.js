import Vue from 'vue'
import VueI18nManager from 'vue-i18n-manager'
import store from '@/store'
import router from '@/router'

const proxy = {
  getTranslation: async () => {
    // return await store.dispatch('setting/GET_TRANSLATIONS')
  }
}

Vue.use(VueI18nManager, {
  store,
  router,
  proxy,
  config: {
    defaultCode: 'ua-UA',
    languages: [
      {
        name: 'Ukranian',
        title: 'Ua.',
        key: 'uk',
        code: 'ua-UA',
        urlPrefix: 'uk',
        translationKey: 'uk'
      },
      {
        name: 'Russian',
        title: 'Rus.',
        key: 'ru',
        code: 'ru-RU',
        urlPrefix: 'ru',
        translationKey: 'ru'
      },
      {
        name: 'English',
        title: 'Eng.',
        key: 'eng',
        code: 'en-US',
        urlPrefix: 'en',
        translationKey: 'en'
      }
    ],
    translations: proxy
  }
})
