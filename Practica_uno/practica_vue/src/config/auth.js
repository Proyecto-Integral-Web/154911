import fireApp from './_firebase'
import router from '@/router'

// import fireApp from './_firebase'

export default {
  logOut () {
    fireApp.auth().signOut()

    router.push({ name: 'Login' })
  },
  checkUser () {
    let user = fireApp.auth().currentUser
    if (user) {
      return user
    }
    return null
  },
  singUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') { return alert('todos los datos son obligatorio,') }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((result) => {
      let newUser = {}
      newUser.displayName = data.nombre
      fireApp.auth().updateCurrentUser(newUser).catch(err => console.log(err))
    }).catch((err) => {
      console.table(err)
    })
    console.log(data)
  },
  login (data) {
    console.log('este es el login')
    fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then(
      (result) => {
        console.log(result)
        router.push({ name: 'profile' })
      }).catch((err) => {
      console.log(err)
    })
  }
}
