<template>
    <secction>
      <header>

      </header>
      <section class="alinearIzq formulario">
        <img>
        <br>
        <div class="row top-buffer">
          <h1 class="col"><strong>Log in</strong></h1>
          <a class="logut">Sing up</a>
        </div>

        <div class="form-group">
          <div>
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
                @keypress.enter="login"
            >
            {{user.password}}
            <br>
            <router-link
            to="/about"
            tag="p"
            >don't remember your password ?</router-link>
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
      </section>

    </secction>

</template>

<script lang='js'>
export default {
  name: 'loginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      userEmail: '',
      userPassword: ''
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    console.log('estoy en mounthed')
    console.log('estoy en')
  },
  methods: {
    login () {
      console.log(this.user.password)
      console.log(this.user.email)
      setTimeout(() => {
        // tiempo de espera y te manda a otra ruta.
        this.$router.push({ name: 'about' })
      }, 1000)
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
</style>
