<template>
  <div class="container contenedor">
      <div class="renglon">
        <div class="cont2">
          <div class="logo">
              <h1><strong>Keyhub</strong></h1>
          </div>
          <LoginForm class="col"></LoginForm>
        </div>
        <div class="cont1">
          <h2 class="contenido">Certificate Lifecycle Management On Autopilot
          </h2>
          <br>
          <p class="contenido2">keyhub helps IT professional discover, organize, and track TLS/SSL certificate, so nothing fall of the radar.</p>
        </div>
      </div>
    </div>

</template>

<script lang='js'>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
<style lang='scss'>
  .contenedor{
    background-color: white;
    margin-top: 7%;
  }
  .cont1{
    height:1fr;
    width: 75%;
    background-color: #364FCC;
    align-items: center;
  }
  .cont2{
    width: 25%;
    margin-bottom: 20px;
  }
  .contenido{
    color: white;
    margin: auto;
    font-size: 2.5em;
    width: 40%;
    text-align: left;
    font-weight: bold;
  }
  .logo{
    margin-top: 20%;
  }
  .contenido2{
    color: white;
    width: 40%;
    text-align: left;
    margin: auto;
  }
</style>
