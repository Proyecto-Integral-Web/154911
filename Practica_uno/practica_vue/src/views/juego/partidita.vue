<template>
<section>
    <div class="row container-fluid">
      <h1 class="row ofset-3 backColor">Juego: 1</h1>
      <div class="row">
        <div class="col col-sm-3">
            <button @click="crearPartida()"></button>
        </div>

        <div class="col col-sm-4">
        <UserArena @opcion="getOpcion"></UserArena>
      </div>
      <div class="col">
        <UserArena class="col"></UserArena>
      </div>
      </div>

  </div>
  <div class="col col-sm-6"></div>
</section>

</template>
<script lang='js'>
import UserArena from '@/components/juego/UserArena'
import FireApp from '@config/_firebase.js'
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  data () {
    return {
      partida: ''
    }
  },
  firestore:{
    partida: fireApp.firestore().collection('juego-1')
  }
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.optenerPartida()
    })
  },
  methods: {
    crearPartida () {
      fireApp.firestore().collection('juego-1').doc('partida-2').set({
        'usuario-1': '',
        'usuario-2': '',
        'ganador': ''
      })
    },
    optenerPartida () {
      fireApp.firestore().collection('juego-1').doc(this.partida)
    },
    getOpcion (opcion) {
      alert('estoy en partida: ${opcion}')
    }
  }
}
</script>
<style lang='scss'>
.backColor{
  background-color: red;
  color: white;;
}
</style>
