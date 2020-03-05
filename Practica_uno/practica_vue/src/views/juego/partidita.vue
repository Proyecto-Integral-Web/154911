<template>
<section>
    <div class="row container-fluid">
      <h1 class="row ofset-3 backColor">Juego: 1</h1>
      <div class="row">
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
export default {
  name: 'Partida',
  components: {
    UserArena
  }/*,
  methods: {
    getOpcion (opcion) {
      alert('estoy en partida: ${opcion}')
    }
  } */
}
</script>
<style lang='scss'>
.backColor{
  background-color: red;
  color: white;;
}
</style>
