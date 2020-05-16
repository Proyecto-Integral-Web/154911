<template src="../recursos/html/juegos/juegoPiedras.html"></template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['userOpcion', 'displayName', 'turnoTerminado'],

  data () {
    return {
      options: {
        t: 'https://raw.githubusercontent.com/Proyecto-Integral-Web/154911/master/practicavuei/src/assets/Page-Files/tijera.png',
        pp: 'https://raw.githubusercontent.com/Proyecto-Integral-Web/154911/master/practicavuei/src/assets/Page-Files/papel.png',
        p: 'https://raw.githubusercontent.com/Proyecto-Integral-Web/154911/master/practicavuei/src/assets/Page-Files/piedra.png'
      }
    }
  },
  methods: {
    select (key) {
      if (!this.turnoTerminado) {
        this.userOpcion = key
      }
    },
    terminar () {
      if (this.userOpcion !== '') {
        this.$emit('terminar', [this.userOpcion, this.displayName])
        this.turnoTerminado = true
      }
    }
  }
}
</script>

<style lang="scss">
@import "../recursos/css/juegos/opciones.scss";
</style>
