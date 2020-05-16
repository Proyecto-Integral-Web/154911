<template>
  <div>
    <div class="about">
      <div class="home p-3">
        <div class="row">
          <div class="col">
            <about></about>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <viewProfile id="editar"></viewProfile>
          </div>
        </div>
      </div>
      <input type="button" value="Cerrrar Sessión" @click="logOut" class="btn btn-danger" />
    </div>
  </div>
</template>

<script lang="js">
import viewProfile from '@/components/viewprofile'
import about from '@/components/about'
import Auth from '@/config/auth.js'

export default {
  name: 'About',
  components: {
    viewProfile,
    about

  },
  methods: {
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>
<style lang="scss">
#editar {
  display: none;
}
.about {
  float: left;
}
</style>
