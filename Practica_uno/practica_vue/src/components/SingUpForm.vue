<template>
    <section>
      <div class="alinearIzq formulario">
        <img>
        <br>
        <div class="row top-buffer">
          <h2 class="col"><strong>Sing Up</strong></h2>
          <router-link
            to="/"
            tag="a"
            class="Registro"
            >Log in</router-link>
        </div>

        <div class="form-group">
          <div>
            <input
                type="name"
                class="cuadroTexto"
                placeholder="Name"
                v-model="user.name"
            >
            <input
                type="email"
                class="cuadroTexto"
                placeholder="example@email.com"
                v-model="user.email"
            >

            <input
                type="password"
                class="cuadroTexto"
                placeholder="password"
                v-model="user.password"
                @keypress.enter="singUp"
            >

            <button type="button" class="btn btn-danger" @click="SingUp">Sing Up</button>

            <div>
              <br>
              <router-link
              to="/"
              tag="a"
              class="Registro"
              >do you have an acount?</router-link>
            </div>

          </div>
        </div>
      </div>

    </section>

</template>

<script lang='js'>
import Auth from '@/config/auth.js'
export default {
  name: 'sinUpForm',
  data () {
    return {
      user: {
        email: '',
        password: '',
        name: '',
        telefono: ''
      },
      userEmail: '',
      userPassword: '',
      userName: ''
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    console.log(this.user.nombre)
  },
  methods: {
    SingUp () {
      Auth.singUp(this.user)
      console.log(this.user.password)
      console.log(this.user.email)
      console.log(this.user.name)
      setTimeout(() => {
        // tiempo de espera y te manda a otra ruta.
        this.$router.push({ name: 'Login' })
      }, 500)
    }
  }
}
</script>

<style lang='scss'>
html{
  background-color: #F5F5FC;
}
.formulario{
  background-color: white;
  margin-bottom: 3em;
}
.alinearIzq{
  width: 300px;
  text-align: start;
}
.txt-olvidar{
  margin-bottom: 50px;
  font-size: 15px;
}
.textos{
  width: 80%;
}
.cuadroTexto{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}
.Registro{
  width: 50%;
  color: gray;
  height:50% ;
  text-align: left;
  margin-top: 1em;
}
@media screen {

}

</style>
