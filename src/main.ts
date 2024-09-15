import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from "./router/router"
import './style.css' 
import './assets/hover-css/hover-min.css' 
import './assets/fontawesome-css/css/fontawesome.css' 
import './assets/icomoon/style.css' 
import './assets/scss/allStyle.scss'
const pinia = createPinia()
const app = createApp(App);
    app.use(router);
    app.use(pinia)
    app.use(Quasar, {
        plugins: {}, 
    })
app.mount("#app");
