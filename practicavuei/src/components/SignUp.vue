<template>
  <section
    class="cont-login-form"
    :class="hasErrors? 'animated tada': ''"
  >
    <section class="registro-form">
      <AlertsComponent
        :error="hasErrors"
        :message="errMessage"
      ></AlertsComponent>
      <h3>Registrarse</h3>
      <br />
      <div class="linea"></div>
      <br />
      <p class="txt-registro">Nombre</p>
      <input
        type="email"
        placeholder="Juanito Gonzalez"
        class="input-registro"
        v-model="usuario.nombre"
      />
      <div class="cont-form-input-registro">
        <p class="txt-registro">Correo</p>
        <input
          type="email"
          placeholder="email@email.com"
          class="input-registro"
          v-model="usuario.email"
        />
      </div>
      <div class="cont-form-input-registro">
        <p class="icono">Contraseña</p>
        <input
          type="password"
          placeholder="Contraseña"
          class="input-registro"
          v-model="usuario.password"
          @keypress.enter="signUp"
        />
      </div>
      <input
        type="button"
        value="Registrarse"
        class="btn-registro"
        @click="signUp"
      />
      <br />
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/alerts.vue'

export default {
  name: 'SignUpForm',
  components: {
    AlertsComponent
  },

  data () {
    return {
      hasErrors: false,
      errMessage: '',
      usuario: {
        email: '',
        password: '',
        nombre: ''
      }
    }
  },

  methods: {
    signUp () {
      Auth.signUp(this.usuario)

      this.$router.push({ name: 'about' })
    },

    login () {
      console.log(this.usuario)
    }
  }
}
</script>

<style lang="scss" >
.btn-registro {
  background-color: #631f5c;
  width: 80%;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 1vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto;
  margin-bottom: 4vh;
}
.btn-registro:hover {
  background-color: white;
  color: #631f5c;
}
.cont-form-input-registro {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 1vh;
}
.registro-form {
  margin: auto;
  margin-top: 5vh;
  width: 80%;
}

.linea {
  height: 1px;
  border-bottom: 1.5px solid #631f5c;
  width: 100%;
  margin: auto;
  margin-top: 1vh;
}

.input-registro {
  width: 60%;
  text-align: center;
  color: red;
  background-color: rgba($color: white, $alpha: 0);
}

input[type="text"],
[type="email"],
[type="password"] {
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
}
input[type="text"]:focus,
[type="email"]:focus,
[type="password"]:focus {
  outline: none;
  padding: 0 0 0.875em 0;
  border-bottom: solid 2px #e54669;
}
</style>
