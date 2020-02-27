<template>
    <section>
      <div class="alinearIzq formulario">
        <img>
        <br>
        <div class="row top-buffer">
          <h2 class="col"><strong>Log in</strong></h2>
          <router-link
            to="/SingUp"
            tag="a"
            class="Registro"
            >Sing Up</router-link>
        </div>

        <div class="form-group">
          <div>
            <div class="alert alert-danger" role="alert"></div>
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
                @value="user.nombre"
                @keypress.enter="login"
            >
            <br>
            <router-link
            to="/home"
            tag="p"
            >don't remember your password ?</router-link>
            <br>
            <button type="button" class="btn btn-success" @click="login">Log in</button>

            <div>
              <br>
              <p class="textos">
                Track Certificate expiration date
                Check potential vulneravilities
                Detect policy violation
                  </p>
            </div>

          </div>
        </div>
      </div>

    </section>

</template>

<script lang='js'>
import Auth from '@/config/auth.js'
export default {
  name: 'loginForm',
  data () {
    return {
      user: {
        name: '',
        email: 'paco@gmail.com',
        password: '123456789',
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

<style lang='scss'>
html{
  background-color: #F5F5FC;
}
.formulario{
  background-color: white;
  margin-bottom: 3em;
  margin-left: 3em;
  margin-right: 2em;
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
</style>
