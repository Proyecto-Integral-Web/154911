<template>
  <div class="container contenedor">
      <div class="row">
        <div class="col-4 cont2">
          <div class="logo">
              <h1><strong>Keyhub</strong></h1>
          </div>
          <helloWorld></helloWorld>
        </div>
        <div class="col cont1">
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
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
    margin-top: 20%;
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
