import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router/router"
import './style.css' 
import './assets/hover-css/hover-min.css' 
import './assets/fontawesome-css/css/fontawesome.min.css' 
import './assets/icomoon/style.css' 
import './assets/scss/allStyle.scss'
const pinia = createPinia()
const app = createApp(App);
    app.use(router);
    app.use(pinia)
app.mount("#app");
