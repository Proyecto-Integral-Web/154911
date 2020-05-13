<template>
  <section class="cont-login-form">
    <header>
      <div class="cont-img-perfil">
        <img class="logo" src="../assets/Page-Files/icono.png" />
      </div>
    </header>
    <section class="col">
      <h3 class="colorFuente">{{usuario.displayName}}</h3>
      <h4 class="colorFuente">{{usuario.email}}</h4>
      <div class="cont-btn">
        <div></div>
        <input type="button" value="Editar" class="btn-login" @click="editar()" />
      </div>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser()
    }
  },
  mounted () {
    this.usuario = Auth.checkUser()
  },
  methods: {
    login () {
      Auth.login(this.usuario)
    },
    editar (num) {
      document.getElementById('editar').style.display = 'block'
    }
  }
}
</script>

<style lang="scss">
.fotoPerfil {
  width: 90%;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 10px;
}
.sinColor {
  background-color: none;
}
.cont-img-perfil {
  width: 28vh;
  height: 28vh;
  border-radius: 100%;
  background-color: white;
  margin: auto;
  margin-top: 2vh;
  border-style: solid;
  border-width: 7px;
  border-color: #631f5c;
}
</style>
