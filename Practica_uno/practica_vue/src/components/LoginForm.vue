<template>
  <section>
    <div class="logo">
      <img class="imgLogo" src="../assets/Page-Files/Estrella.png" />
    </div>

    <section class="alinearIzq color-blanco">
      <br />
      <h3 class="txt-titulo">
        <small>Login</small>
      </h3>
      <div class="form-group">
        <!--- Lo utilizamos como etiqueta de HTM, propiedades de las etiquetasL --->
        <alerts-component v-if="showError" :message="errorMessage" :code="errorCode"></alerts-component>
        <div class="cont-form-input">
          <img class="icono" src="../assets/Page-Files/mail.svg" />
          <input
            type="email"
            class="mb-3 mt-3 input1"
            placeholder="Correo electrÃ³nico"
            v-model="user.email"
            @keypress="showError = false"
          />
        </div>

        <div class="cont-form-input">
          <img class="icono" src="../assets/Page-Files/lock.svg" />
          <input
            type="password"
            class="mb-3 mt-3 input1"
            placeholder="ContraseÃ±a"
            v-model="user.password"
            @keypress.enter="login"
          />
        </div>

        <!--Handlebars templating, pasar cosas como js a html-->
        {{user.password}}
        <div class="row">
          <div class="row center">
            <p class="centro">
              <small>Â¿Olvidaste la contraseÃ±a?</small>
            </p>
          </div>
        </div>
      </div>
      <div class="margin">
        <button class="bt-login" @click="login">Login</button>
        <a class="bt-login" href="singup">Registro</a>
      </div>
    </section>
  </section>
</template>

<script lang='js'>
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts'
export default {
  name: 'loginForm',
  components: {
    AlertsComponent
  },
  data () {
    return {
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        name: '',
        email: '',
        password: '',
        nombre: ''
      },
      userEmail: '',
      userPassword: ''
    }
  },
  mounted () {
    console.log(this.user.nombre)
  },
  methods: {
    login () {
      Auth.login(this.user).catch(error => {
        console.log('estamos en el login')
        console.log('esto es un error:' + error.code + error.message)
        this.showError = true
        this.errorMessage = error.message
        this.errorCode = error.code
      }
      )
      /* setTimeout(() => {
        // tiempo de espera y te manda a otra ruta.
        this.$router.push({ name: 'home' })
      }, 1000) */
    }
  }
}
</script>

<style lang="scss">
.centro {
  margin: auto;
  text-align: center;
  width: 100%;
}
.center {
  width: 100%;
  margin: auto;
  color: #e54669;
  text-align: center;
}
.margin {
  display: grid;
  margin-bottom: 4vh;
  grid-template-columns: 1fr;
  grid-row-gap: 2vh;
}
.bt-login {
  width: 75%;
  background-color: #ea5680; /* Green */
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
.bt-login:hover {
  background-color: white;
  color: #ea5680;
}
.cont-form-input {
  display: grid;
  grid-template-columns: 7vh 1fr;
}
.form-group {
  width: 80%;
  margin: auto;
}
.icono {
  margin: auto;
  width: 5vh;
}
.txt-titulo {
  color: darkslategrey;
  font-size: 2em;
  text-align: center;
  margin-top: 13vh;
}
.input1 {
  width: 60%;
  text-align: center;
  color: red;
}
.logo {
  position: relative;
  width: 50%;
  height: 50%;
  margin: 0;
  margin-left: 25%;
  margin-top: 5%;
  background-color: rgba($color: white, $alpha: 1);
  border-radius: 100%;
  bottom: -90px;
  border-style: solid;
  border-width: 7px;
  border-color: #631f5c;
}
.imgLogo {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  margin-top: 5%;
}
.btn-purple {
  background-color: #e54669;
  color: #202020;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
  &:hover,
  &:active {
    background: pink;
  }
}
.alinearIzq {
  text-align: start;
}
.color-blanco {
  background-color: rgba($color: white, $alpha: 0.6);
  border-style: solid;
  border-width: 7px;
  border-radius: 5%;
  border-color: #631f5c;
}
html {
  background-image: url("../assets/Page-Files/background2.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
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
