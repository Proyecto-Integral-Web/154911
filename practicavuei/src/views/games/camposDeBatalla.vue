<template>
  <div>
    <div class="about">
      <div class="home p-3">
        <div class="row">
          <div class="col">
            <about></about>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <viewProfile id="editar"></viewProfile>
          </div>
        </div>
      </div>
      <div class="cont-btn-1">
        <router-link type="button" class="btn-login" to="/sala/CrearPartida">Crear</router-link>
        <input type="button" value="Cerrrar Sessión" @click="logOut" class="btn btn-danger" />
      </div>
    </div>
    <div>
      <div v-for="partida in coleccionDePartidas" :key="partida.id">
        <Arena :partida="partida"></Arena>
      </div>
      <div v-for="partida in coleccionDePartidasSecundaria" :key="partida.id">
        <Arena :partida="partida"></Arena>
      </div>
    </div>
  </div>
</template>

<script lang="js">
// aqui importamos los componenetes que usaremos
import viewProfile from '@/components/viewprofile'
import about from '@/components/about'
import FireApp from '@/config/_firebase.js'
import Auth from '@/config/auth'
import Arena from '@/components/games/miniaturaJuegoPiedras'

// creamos una variable que contrendra la referencia nuestra coleccion
const partidas = FireApp.firestore().collection('juego1')

export default {
  name: 'sala1',
  props: ['user_opcion'],
  components: {
    Arena,
    viewProfile,
    about
  },
  // en data ponemos los datos que manejaremos en el proyecto, las partidas, usuarios y demas
  data () {
    return {
      partida: {},
      partidas: [],
      coleccionDePartidas: [],
      coleccionDePartidasSecundaria: [],
      user: {}
    }
  },
  // aqui verificamos que el usuario haya iniciado sesion y pueda acceder
  // a las pantallas de mis partidas y salas abiertas, dependiendo de donde estas
  // te mostrara las partidas que has creado o las partidad a las que se puede unir aun
  beforeRouteEnter (to, from, next) {
    // console.log(partida)
    next(vm => {
      vm.user = Auth.getUser()

      if (to.params.vista === 'abiertas') {
        vm.coleccionDePartidas = []
        vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
      }
      if (to.params.vista === 'misSalas') {
        vm.coleccionDePartidas = []
        vm.coleccionDePartidasSecundaria = []
        vm.$bind('coleccionDePartidas', partidas.where('retador', '==', vm.user.uid))
        vm.$bind('coleccionDePartidasSecundaria', partidas.where('contricante', '==', vm.user.uid))
      }

      // vm.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
    })
  },
  // guardamos kla referencia de partida con la coleccion
  firestore: {
    partida: FireApp.firestore().collection('juego1')
  },

  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.user = Auth.getUser()
        if (value.vista === 'abiertas') {
          this.coleccionDePartidas = []
          this.$bind('coleccionDePartidas', partidas.where('abierta', '==', true))
        }
        if (value.vista === 'misSalas') {
          this.coleccionDePartidas = []
          this.coleccionDePartidasSecundaria = []
          this.$bind('coleccionDePartidas', partidas.where('retador', '==', this.user.uid))
          this.$bind('coleccionDePartidasSecundaria', partidas.where('contricante', '==', this.user.uid))
        }
      }
    }
  },

  mounted () {
    this.user = Auth.getUser()
    console.log(this.$route.params.vista)
  },

  methods: {
    crearPartida () {
    },

    retar () {
      this.user = Auth.getUser()
    },
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>

<style lang="scss">
body {
  background-size: 100%;
}
.back {
  background-color: aliceblue;
}
.partida {
  background-color: whitesmoke;
}

#editar {
  display: none;
}
.about {
  float: left;
}
.cont-btn-1 {
  display: grid;
  margin-top: 3vh;
  margin-bottom: 3vh;
  grid-template-columns: 1fr;
  grid-row-gap: 1vh;
  margin-left: 3vh;
  margin-right: 3vh;
}
.btn-login-1:hover {
  background-color: white;
  color: #631f5c;
}
</style>
