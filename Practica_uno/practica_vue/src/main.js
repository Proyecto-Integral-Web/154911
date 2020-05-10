import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
import 'animate.css'
import { firestorePlugin } from 'vuefire'

import 'bootstrap/scss/bootstrap.scss'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesitas permisos para entrar')
    let user = Auth.checkUser()

    console.log(user)

    if (user == null) {
      next({
        name: 'Login'
      })

      return null
    }

    next()
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
