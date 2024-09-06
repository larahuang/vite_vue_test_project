import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import './style.css' 
import './assets/hover-css/hover-min.css' 
import './assets/fontawesome-css/css/fontawesome.min.css' 
import './assets/icomoon/style.css' 
import './assets/scss/allStyle.scss'

const app = createApp(App);
    app.use(router);
app.mount("#app");
