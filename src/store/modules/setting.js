import { $http } from '@/utils/https'
import translation from '@/translations'
import { SET_TRANSLATIONS } from '../mutation-types'

import { GET_TRANSLATIONS } from '../action-types'

const state = {
  translations: null
}

const getters = {
  translations: state => state.translations
}

const actions = {
  [GET_TRANSLATIONS]: async ({ commit }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await $http.get('v1/translations')
      const result = Object.assign(response.data, translation)
      commit(SET_TRANSLATIONS, result)
    } catch (e) {
      throw e
    }
  }
}

const mutations = {
  [SET_TRANSLATIONS] (state, status) {
    state.translations = status
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
