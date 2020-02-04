<template>
  <div class="login">
    <h1></h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm> </LoginForm>;
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
