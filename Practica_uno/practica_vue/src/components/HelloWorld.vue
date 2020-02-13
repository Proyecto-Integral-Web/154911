<template>
    <secction>
      <header>

      </header>
      <section class="alinearIzq formulario">
        <img>
        <br>
        <div class="row top-buffer">
          <h2 class="col"><strong>Sing Up</strong></h2>
          <router-link
            to="/"
            tag="a"
            class="Registro"
            >Login</router-link>
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
            <input
                type="password"
                class="cuadroTexto"
                placeholder="password"
                v-model="user.password"
                @keypress.enter="login"
            >
            <br>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">I accept the security policies</label>
</div>
            <br>

            <button type="button" class="btn btn-danger" @click="login">Sing Up</button>

          </div>
        </div>
      </section>

    </secction>

</template>

<script lang='js'>
export default {
  name: 'Sing Up',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      userEmail: '',
      userPassword: ''
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
  margin-bottom: 2em;
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
  width: 30%;
  color: gray;
  height:50% ;
  text-align: left;
  margin-top: 1em;
}
</style>
