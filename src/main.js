import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

import axios from "axios"
import VueAxios from "vue-axios"
axios.defaults.baseURL = process.env.VUE_APP_APP_URL
Vue.use(VueAxios, axios)

import "vant/lib/icon/local.css"
import { Button, NavBar } from "vant"
Vue.use(Button)
Vue.use(NavBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
