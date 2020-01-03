import Vue from 'vue'
import App from './App.vue'
import router from './utils/router';
// import VueRouter from 'vue-router';
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'


Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

Vue.use(Vant)

// Vue.use(VueRouter)

// const routes = [
//   {
//     name: 'vueIndex',
//     path: '/vueIndex',
//     component: () => import('./components/Index/index.vue')
//   },
//   {
//     name: 'helloWorld',
//     path: '/helloWorld',
//     component: () => import('./components/Hello/HelloWorld.vue')
//   },
//   {
//     path: '/',
//     redirect: "/vueIndex"
//   },
// ]

// const router = new VueRouter({
//   routes: routes,
// })



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
