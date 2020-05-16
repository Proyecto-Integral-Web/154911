<template>
  <div class="home p-3">
    <div class="row">
      <div class="col">
        <LoginForm class="formulario"></LoginForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
<style lang="scss">
html {
  background-image: url("../assets/Page-Files/background2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top; /* Center the image */
}
* {
  margin: auto;
}
.formulario {
  position: relative;
  top: -60px;
}
</style>
