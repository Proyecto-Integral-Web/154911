<template>
<section>
    <div class="row">
      <div class="col">
        <button class="btn btn-success mb-2" @click="crearPartida">Nueva Partida</button>
      </div>
    </div>
    <div class="partida py-3">
      <div class="row">
        <div class="col col-sm-6 offset-3">
          <h3 class="text-center">{{$route.params.no_partida.replace('-','')}}</h3>
        </div>
      </div>
        <div class="row">
          <div class="col col-sm-6">
            <user-arena
            @opcion="getOpcion" :userOpcion="partida.usuario_1"
            :displayName="!user.displayName?partida.names[0]!== user.displayName?partida.names[0]:'':user.displayName"></user-arena>
          </div>
          <div class="col col-sm-6">
            <button
            v-if="!partida.names[1]"
            class="btn btn-outline-primary"
            @click="retar">
            👻
            </button>
            <user-arena
            :displayName="!partida.names[1]?'Esperando Retador':partida.names[1]"
            :userOpcion="partida.usuario_1!=''?partida.usuario_2:''" @opcion="getOpcion"></user-arena>
          </div>
        </div>
        {{partida}}
    </div>
</section>

</template>
<script lang='js'>
import UserArena from '@/components/juego/UserArena'
import FireApp from '@/config/_firebase.js'
import Auth from '@/config/auth.js'

const partida = FireApp.firestore().collection('juego-1')
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.obtenerPartida(to.params.no_partida)
      vm.user = Auth.getUser()

      // to.params.no_partida = vm.user.email

      vm.crearPartida()

      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
    }
  },
  firestore: {
    partidas: FireApp.firestore().collection('juego-1')
  },
  watch: {
    '$route.params': {
      deep: true,
      inmediate: true,
      handler (value) {
        this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted () {
    this.user = Auth.getUser()
  },
  methods: {
    crearPartida () {
      this.user = Auth.getUser()

      let uid = this.user.uid

      FireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).set({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario_1: '',
        usuario_2: '',
        ganador: ''
      })
    },
    obtenerPartida (partida) {
      FireApp.firestore().collection('juego-1').doc(partida).get().then((result) => {
        console.log(result.data())
      })
    },
    retar () {
      this.user = Auth.getUser()
      // let uid = this.user.uid
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      FireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))

      if (this.partida.names[participantes.indexOf(this.user.uid)] !== opcion[1]) {
        return 0
      }
      console.log(opcion)

      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion[0]
        }
      } else {
        data = {
          'usuario_2': opcion[0]
        }
      }
      FireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(data)
    }
  }
}
</script>
<style lang="scss">
  .partida {
    background: palevioletred;
  }
</style>
