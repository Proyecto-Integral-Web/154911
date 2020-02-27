import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('No eres vienvendo aqui largo simple mortal')

    let user = Auth.checkUser()
    console.log(user)
    if (user == null) {
      next({ name: 'Login' })
    }
    /* if (Auth.checkUser()) {
      next()
      return
    } */
    console.log('usuario logeado: ' + user.email)
    next()
  }
  next()
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
