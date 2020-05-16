<template id="editar">
  <section class="cont-login-form">
    <section class="registro-form">
      <h2 class="txt-titulo">Editar</h2>
      <div class="linea"></div>
      <div class="cont-form-input-registro">
        <h6 class="txt-registro">Correo</h6>
        <input
          type="email"
          placeholder="email@gmail.com"
          class="input-registro"
          v-model="usuario.email"
        />
      </div>
      <div class="cont-form-input-registro">
        <h6 class="txt-registro">Nombre</h6>
        <input type="text" placeholder="nombre mostrado" class="form-control" v-model="displayName" />
      </div>
      <div class="cont-form-input-registro">
        <h6 class="txt-registro">No.Celular</h6>
        <input
          type="number"
          placeholder="(656) 555 5555"
          class="input-registro"
          v-model="phoneNumber"
        />
      </div>
      <div class="cont-btn-2">
        <input type="button" value="Actualizar" class="btn-login-1" @click="updateData" />
        <input type="button" value="Cancelar" class="btn-login-1" @click="cancelar " />
      </div>
    </section>

    <br />
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser(),
      displayName: '',
      phoneNumber: ''
    }
  },

  mounted () {
    this.usuario = Auth.checkUser()
    this.displayName = this.usuario.displayName
    this.phoneNumber = this.usuario.phoneNumber
  },

  methods: {
    login () {
      Auth.login(this.usuario)
    },
    cancelar () {
      document.getElementById('editar').style.display = 'none'
    },
    updateData () {
      this.usuario.updateProfile({
        displayName: this.displayName,
        phoneNumber: this.phoneNumber
      }).then(() => {
        console.log('Logrado')
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>

<style lang="scss">
.txt-titulo {
  margin-top: 2vh;
}
.editar {
  display: none;
}
.cont-btn-2 {
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1vh;
}
.btn-login-1 {
  background-color: #631f5c;
  width: 100%;
  border: none;
  color: white;
  border-radius: 1vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto;
  padding: 15%;
}
</style>
