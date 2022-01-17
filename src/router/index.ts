import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { store, key } from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../components/Search/index.vue"),
  },
  {
    path: "/descr",
    name: "Descr",
    props(route) {
      return { id: route.query.id };
    },
    component: () => import(/* webpackChunkName: "Descr" */ "../components/MovieDescription/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to: any, from: any, next: any) => {
  store.commit("isLoading")
  next()
});

router.afterEach((to: any, from: any, next: any) => {
  setTimeout(function(){
    store.commit("isLoaded")
    },200)
});

export default router;
