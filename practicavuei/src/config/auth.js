import fireApp from './_firebase'
import router from '@/router'

export default {
  // metodo de registrar, pasando los datos en un objeto tivo data y verificando que estos no esten vacios.
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('Todos los campos son obligatorios')
    }

    fireApp
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }

        fireApp
          .auth()
          .updateCurrentUser(newUser)
          .catch(err => console.table(err))
        router.push('/partidas/misSalas')
      })
      .catch(err => {
        return Promise.reject(err)
      })

    console.log(data)
  },
  // este metodo hace que se pueda actualizar el usuario
  updateUser (data) {
    let newUser = {
      displayName: data.displayName,
      email: data.email,
      photoURL: data.photoURL,
      phoneNumber: data.phoneNumber
    }

    fireApp
      .auth()
      .updateCurrentUser(newUser)
      .catch(err => console.table(err))
    router.push('/partidas/misSalas')
  },
  // metodo para iniciar sesion por medio de un email y contraseña
  async login (data) {
    await fireApp
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(result => {
        console.log(result)
        router.push('/partidas/misSalas')
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  // aqui checamos al ususario si este esta logeado
  checkUser () {
    let user = fireApp.auth().currentUser

    if (user) {
      return user
    }

    return null
  },
  // cerramos sesion de uauario
  logOut () {
    fireApp.auth().signOut()
    router.push({
      name: 'login'
    })
  },
  // lo mismo que el curren user
  getUser () {
    return fireApp.auth().currentUser
  }
}
