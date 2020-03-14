import fireApp from './_firebase'
import router from '@/router'

// import fireApp from './_firebase'

export default {
  saveChange (data) {
    var user = fireApp.auth().currentUser
    if (user) {
      user.updateProfile({ displayName: data.nombre }).then(result => {
        console.log('nombre agregado')
      }).catch(err =>
        console.log(err)
      )
    }
  },
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
      let newUser = {
        displayName: result.data.nombre,
        email: result.data.email,
        uid: result.data.id
      }
      fireApp.auth().updateCurrentUser(newUser).catch(err => console.log(err))
    }).catch((err) => {
      console.table(err)
    })
    console.log(data)
  },
  async login (data) {
    await fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then((result) => {
      // console.log(result)
      router.push({ name: 'profile' })
    }).catch((err) => {
      return Promise.reject(err)
    })
  },
  getUser () {
    return fireApp.auth().currentUser
  }
}
