<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>About</h1>
    <button type="button" class="btn btn-danger" @click="logOut">salir </button>

  </div>
</template>

<script>
import Auth from '@/config/auth.js'
export default {
  name: 'About',
  methods: {
    logOut () {
      Auth.logOut()
    }
  }
}

// @ is an alias to /src
</script>
