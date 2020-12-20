import Vue from 'vue'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const $http = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    Accept: 'application/json'
  }
})
$http.interceptors.request.use((config) => {
  return config
})
$http.interceptors.response.use((response) => {
  return response
}, (error) => {
  switch (error.response.status) {
    case 500: {
      store.commit('system/CHANGE_ERROR', {
        message: '500 server error'
      })
      break
    }
    case 404: {
      store.commit('system/CHANGE_ERROR', {
        message: '404 page not found'
      })
      break
    }
    case 422: {
      const errors = error.response.data.validation
      Object.values(errors).forEach(e => {
        e.forEach(t => {
          store.commit('system/CHANGE_ERROR', {
            message: t,
            code: error.response.status
          })
        })
      })
      break
    }
    default: {
      store.commit('system/CHANGE_ERROR', {
        message: JSON.stringify(error.response.data)
      })
    }
  }
  return Promise.reject(error)
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return $http
    }
  })
}
