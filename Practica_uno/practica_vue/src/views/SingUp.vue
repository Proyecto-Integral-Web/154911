<template>
  <div class="container contenedor">
      <div class="renglon">
        <div class="cont2">
          <div class="logo sing">
              <h1><strong>Keyhub</strong></h1>
          </div>
          <SingUpForm class="col sing"></SingUpForm>
        </div>
        <div class="cont1">
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
    min-width: 400px;
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
  .renglon{
    display: grid;
    grid-template-columns: 23vw 57vw;
    min-width: 400px;

  }
  .cont1{
    background-color: #364FCC;
    align-items: center;
    margin-left: 3vw;
    min-width: 400px;
  }
  .cont2{
    width: 2fr;
    margin-bottom: 20px;
    min-width: 400px;
  }
@media only screen and (max-width: 1600px) {
    .renglon{
    display: grid;
    grid-template-columns: 30vw 50vw;

  }
  .cont1{
    background-color: #364FCC;
    align-items: center;
    margin-left: 3vw;
  }
  .cont2{
    width: 2fr;
    margin-bottom: 20px;
  }
  }
@media only screen and (max-width: 1400px) {
    .renglon{
    grid-template-columns: 80vw;
    margin-left:5vw;
    margin-right: 10vw;

  }
  .cont1{
    background-color: #364FCC;
    align-items: center;
    margin-left: 3vw;
  }
  .cont2{
    width: 2fr;
    margin-bottom: 20px;
  }
  .contenedor{
    background-color: white;
    margin-top: 7%;
    padding: 0;
  }
  .sing{
    margin-left: 10vw;
    text-align: center;
  }
  }
  @media only screen and (max-width: 600px) {
  .renglon{
    width: 100%;
    margin: 0;
  }
  .cont1{
    align-items: center;
    margin: 12vw;
  }
  .cont2{
    width: 100%;
    margin-bottom: 0;
  }
  .contenedor{
    width: 100%;
  }
  .sing{
    text-align: center;
  }
  .logo{
    margin-top: 0;
  }
  }
  .contenido .contenido2{
    margin: 0;
  }

</style>
