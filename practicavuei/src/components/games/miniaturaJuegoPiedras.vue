<template src="../recursos/html/juegos/miniaturaPiedras.html"></template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['partida'],

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
  }
}
</script>

<style lang="scss">
.contBloque {
  width: 100%;
  height: 500px;

  border-radius: 50px;

  background-color: gray;
}

.opciones {
  background: rgb(133, 80, 194);
  .opcion {
    cursor: pointer;
    &:hover {
      background: rgb(164, 121, 219);
    }
  }
}
</style>
