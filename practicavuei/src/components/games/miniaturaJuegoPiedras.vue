<template src="../recursos/html/juegos/miniaturaPiedras.html">
</template>

<script lang="js">
export default {
  name: 'sala1',

  props: ['partida'],

  data () {
    return {
      options: {
        t: '✂️',
        pp: '🧻',
        p: '💎'
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
