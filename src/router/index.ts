import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../components/Search/index.vue')
  },
  {
    path: '/descr',
    name: 'Descr',
    props(route) {
      return {  id: route.query.id }
    },
    component: () => import(/* webpackChunkName: "Descr" */ '../components/MovieDescription/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
