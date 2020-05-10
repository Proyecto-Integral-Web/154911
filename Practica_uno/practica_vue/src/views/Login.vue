<template>
  <div class="container">
    <div class="pt-5 margen-0">
      <!--incovamos componente para ordenar hacia la derecha-->
      <div class="row p-4">
        <div class="col-md-4">
          <LoginForm class="margen-0"></LoginForm>
        </div>
        <div class="col">
          <!--Invocamos el componente para su visualizacion-->
        </div>
      </div>
      <!--Hasta aqui termina el div del primer row, ordenando todo el loginform-->
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
<style lang="scss">
.margen-0 {
  margin-top: 0;
  position: relative;
  top: -15vh;
}
.img-ajus {
  width: 25%;
  //width: 20%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
