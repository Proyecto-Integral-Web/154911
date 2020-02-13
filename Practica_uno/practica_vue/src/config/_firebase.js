import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAx4zAomNUAQELYcuH8aN7kodSpdu91smE',
  authDomain: 'logintrabajo-cfa17.firebaseapp.com',
  databaseURL: 'https://logintrabajo-cfa17.firebaseio.com',
  projectId: 'logintrabajo-cfa17',
  storageBucket: 'logintrabajo-cfa17.appspot.com',
  messagingSenderId: '71568411225',
  appId: '1:71568411225:web:c9a2adec440f80997c3f48',
  measurementId: 'G-Y31FZC7YBP'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
