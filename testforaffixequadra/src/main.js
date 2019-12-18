import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Form from "./components/Form"
import Index from "./components/Index"
import Result from "./components/Result"
import OneResult from "./components/OneResult"
import NotFound from "./components/NotFound"

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/form', component: Form},
    {path: '/index', component: Index},
    {path: '/result/:oneResult_id', component: OneResult},
    {path: '/result', name:'result', component: Result,  props: true},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
