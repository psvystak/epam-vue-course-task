import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import theme from '@/assets/scss/imports.scss'

const app = createApp(App).use(router).use(router);
import { store, key } from './store'
import router from './router'
app.use(store, key, theme)
app.mount("#app");