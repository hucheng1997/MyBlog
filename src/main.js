import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

const vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
