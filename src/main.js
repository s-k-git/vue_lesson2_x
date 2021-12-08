import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './route'
import store from "./store"
import VueRouter from "vue-router"

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {App},
  template: "<App/>",
  render: h => h(App),
}).$mount('#app')
