import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

const app = createApp(App)

app.use(VueGtag, {
    config: { id: "UA-89047400-5" }}, router)

  app.use(router)

app.mount('#app')
