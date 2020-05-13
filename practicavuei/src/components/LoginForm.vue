<template>
  <div>
    <div class="cont-log">
      <img class="logo" src="../assets/Page-Files/logo.png" />
    </div>
    <section class="cont-login-form" :class="hasErrors ? 'animated tada': ''">
      <section class="login-form">
        <h3>Iniciar sesion</h3>
        <AlertsComponent :error="hasErrors" :message="errMessage"></AlertsComponent>
        <div class="cont-form-input">
          <img class="icono" src="../assets/Page-Files/mail.svg" />
          <input
            type="email"
            placeholder="Correo"
            class="input-login"
            v-model="usuario.email"
            @keypress="hasErrors = false"
          />
        </div>
        <div class="cont-form-input">
          <img class="icono" src="../assets/Page-Files/lock.svg" />
          <input
            type="password"
            placeholder="Contraseña"
            class="input-login"
            v-model="usuario.password"
            @keypress.enter="login"
          />
        </div>
        <a class>¿Olvidaste tu contraseña?</a>
        <div class="cont-btn">
          <input type="button" value="Entrar" class="btn-login" @click="login" />
          <router-link
            :to="{name: 'SignUp'}"
            class="btn-login"
            :class="$route.name=='SignUp'?'btn':'' "
          >Registrate</router-link>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/alerts.vue'

export default {
  name: 'LoginForm',
  components: {
    AlertsComponent
  },

  data () {
    return {
      hasErrors: false,
      errMessage: '',
      usuario: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
  },

  methods: {
    login () {
      Auth.login(this.usuario)
        .catch((error) => {
          console.log(error.code + ':' + error.message)
          this.hasErrors = true
          this.errMessage = error.message
        })
    }
  }
}
</script>

<style lang="scss">
body {
  background-image: url("/src/assets/Page-Files/background2.jpg");
}
html {
  background-image: url("/src/assets/Page-Files/background2.jpg");
}
.cont-btn {
  display: grid;
  margin-top: 3vh;
  margin-bottom: 3vh;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1vh;
}
.btn-login {
  background-color: #631f5c;
  width: 100%;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 1vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto;
}
.btn-login:hover {
  background-color: white;
  color: #631f5c;
}
.icono {
  width: 95%;
  margin-top: -1vh;
  margin-right: 2vh;
}
.cont-form-input {
  display: grid;
  grid-template-columns: 7vh 1fr;
  grid-column-gap: 1vh;
}
.login-form {
  margin: auto;
  margin-top: 15vh;
  width: 80%;
}
.cont-login-form {
  background-color: rgba($color: white, $alpha: 0.6);
  border-style: solid;
  border-width: 7px;
  border-radius: 5%;
  border-color: #631f5c;
  max-width: 400px;
  min-width: 300px;
}
.cont-log {
  width: 28vh;
  height: 28vh;
  border-radius: 100%;
  background-color: white;
  margin: auto;
  border-style: solid;
  border-width: 7px;
  border-color: #631f5c;
  position: relative;
  top: 13vh;
}
.logo {
  margin: 1vh;
  width: 90%;
  height: 90%;
}
.input-login {
  width: 60%;
  text-align: center;
  color: red;
  background-color: rgba($color: white, $alpha: 0);
}
input[type="text"],
[type="email"],
[type="password"],
[type="number"] {
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: black;
  font-size: 1em;
  font-weight: 200;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
  text-align: center;
}
input[type="text"]:focus,
[type="email"]:focus,
[type="password"]:focus,
[type="number"]:focus {
  outline: none;
  padding: 0 0 0.875em 0;
  border-bottom: solid 2px #e54669;
  background-color: white;
  border-radius: 5vh;
  border: none;
  box-shadow: 0 0 3px #631f5c, 0 0 5px #e54669;
  text-align: center;
  align-items: center;
}
</style>
