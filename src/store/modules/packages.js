import { $http } from '@/utils/https'
import {
  CHANGE_LOADING,
  CHANGE_QUERY_PARAMS,
  SET_ITEM,
  SET_LIST,
  SET_LIST_LENGTH,
  SET_LIST_LOADING
} from '../mutation-types'

import { GET_ITEM, GET_LIST } from '../action-types'

const state = {
  list: [],
  totalListLength: 0,
  isListLoading: false,
  queryParams: {
    size: 12,
    from: 0,
    text: ''
  },
  currentItem: null,
  isLoading: false
}

const getters = {
  list: state => state.list,
  totalListLength: state => state.totalListLength,
  isListLoading: state => state.isListLoading,
  queryParams: state => state.queryParams,
  currentItem: state => state.currentItem,
  isLoading: state => state.isLoading
}

const actions = {
  [GET_LIST]: async ({ state, commit }) => {
    commit(SET_LIST_LOADING, true)
    try {
      const response = await $http.get(`/-/v1/search?text=${state.queryParams.text}&size=${state.queryParams.size}&from=${state.queryParams.from}`)
      commit(SET_LIST, response.data.objects)
      commit(SET_LIST_LENGTH, response.data.total)
      // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e
    } finally {
      commit(SET_LIST_LOADING, false)
    }
  },
  [GET_ITEM]: async ({ commit }, payload) => {
    commit(CHANGE_LOADING, true)
    try {
      const response = await $http.get(`/${payload.package}`)
      commit(SET_ITEM, response.data.objects)
      // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e
    } finally {
      commit(CHANGE_LOADING, false)
    }
  }
}

const mutations = {
  [SET_LIST] (state, list) {
    state.list = list
  },
  [SET_LIST_LOADING] (state, status) {
    state.isListLoading = status
  },
  [SET_LIST_LENGTH] (state, length) {
    state.totalListLength = length
  },
  [CHANGE_QUERY_PARAMS] (state, params) {
    const { key, value } = params
    state.queryParams[key] = value
  },
  [SET_ITEM] (state, data) {
    state.currentItem = data
  },
  [CHANGE_LOADING] (state, status) {
    state.isLoading = status
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
