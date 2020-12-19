import { $http } from '@/utils/https'
import { SET_LIST, SET_LIST_LOADING } from '../mutation-types'

import { GET_LIST } from '../action-types'

const state = {
  list: [],
  isListLoading: false
}

const getters = {
  list: state => state.list,
  isListLoading: state => state.isListLoading
}

const actions = {
  [GET_LIST]: async ({ commit }) => {
    commit(SET_LIST_LOADING, true)
    try {
      const response = await $http.get('v1/order/history?include=products')
      commit(SET_LIST, response.data.data)
      // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e
    } finally {
      commit(SET_LIST_LOADING, false)
    }
  }
}

const mutations = {
  [SET_LIST] (state, list) {
    state.list = list
  },
  [SET_LIST_LOADING] (state, status) {
    state.isListLoading = status
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
