import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index'
import Home from '../components/home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
