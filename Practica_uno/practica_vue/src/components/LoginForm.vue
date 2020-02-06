<template>
    <secction>
      <header>
        <div class="logo"></div>
      </header>
      <section class="alinearIzq formulario">
        <img>
        <br>
        <div class="row top-buffer">
          <h1 class="col"><strong>Log in</strong></h1>
          <a class="col">Sing Up</a>
        </div>

        <div class="form-group">
          <div>
            <input
                type="email"
                class="form-control espacio"
                placeholder="example@email.com"
                v-model="user.email"
            >
            <input
                type="password"
                class="form-control"
                placeholder="password"
                v-model="user.password"
                @keypress.enter="login"
            >
            {{user.password}}
            <br>
            <a class="txt-olvidar"></a>
            <router-link
            to="/about"
            tag="p"
            >don't remember your password ?</router-link>
            <br>
            <button type="button" class="btn btn-success espacio" @click="login">Log in</button>
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
  background-color:blue;
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
.espacio{
  margin-top: 20px;
}
</style>
