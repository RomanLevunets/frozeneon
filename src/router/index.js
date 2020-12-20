import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/modules/main/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang(.{2})?/',
    name: 'Home',
    component: Home,
    redirect: '/:lang?/dashboard'
  },
  {
    path: '/:lang?/dashboard',
    name: 'Dashboard',
    component: () => import('@/modules/packages/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
