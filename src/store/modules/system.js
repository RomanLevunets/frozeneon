import { CHANGE_ERROR } from '@/store/mutation-types'

const state = {
  error: {
    id: Date.now(),
    show: false,
    message: ''
  }
}

const getters = {
  error: state => state.error
}

const mutations = {
  [CHANGE_ERROR] (state, { message }) {
    state.error.id = Date.now()
    state.error.show = true
    state.error.message = message
    setTimeout(() => {
      state.error.show = false
    }, 3000)
  }
}

export default {
  state,
  getters,
  mutations
}
