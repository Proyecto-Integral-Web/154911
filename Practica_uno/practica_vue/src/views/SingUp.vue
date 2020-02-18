<template>
  <div class="container contenedor">
      <div class="row">
        <div class="col-4 cont2">
          <div class="logo">
              <h1><strong>Keyhub</strong></h1>
          </div>
          <SingUpForm class="col"></SingUpForm>
        </div>
        <div class="col cont1">
          <img class="imagen" src="../assets/imgRobot.jpg">
        </div>
      </div>
    </div>

</template>

<script lang='js'>
// @ is an alias to /src
import SingUpForm from '@/components/SingUpForm.vue'

export default {
  name: 'singUp',
  components: {
    SingUpForm
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
  .imagen{
    width: 100%;
    margin:auto;
    margin-top: 7vh;
    margin-bottom:8vh;
  }
</style>
