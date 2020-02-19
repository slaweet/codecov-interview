import Vue from 'vue'
import VueRouter from 'vue-router'

import RepositoriesPage from '@/components/RepositoriesPage.vue'
import RepositoryOverviewPage from '@/components/RepositoryOverviewPage.vue'

const routes = [
  { path: '/overview/:repo', component: RepositoryOverviewPage },
  { path: '*', component: RepositoriesPage }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
