import Vue from 'vue'
import VueRouter from 'vue-router'

import RepositoriesPage from '@/components/RepositoriesPage.vue'

const routes = [
  { path: '*', component: RepositoriesPage }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
