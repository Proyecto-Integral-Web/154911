<template>
  <div>
    <div class="contImg">
      <img class="imagen" src="../assets/Robot4_1.png" alt="">
    </div>
    <input
        type="text"
        id="form1"
        class="outlinenone "
        v-model="user.email"
    >
  </div>
</template>
<script lang='js'>
import Auth from '@/config/auth.js'
import Firebase from '@/config/_firebase.js'
export default {
  name: 'profileForm',
  data () {
    return {
      user: {
        email: '',
        telefono: '',
        nombre: ''
      },
      userEmail: ''
    }
  },
  mounted () {
    let usuario = Firebase.auth().currentUser
    console.log('holaaaaaaaaaa' + usuario.email)
    this.user.email = usuario.email
  },
  methods: {
    logOut () {
      Auth.logOut()
    }
  }
}
</script>
<style lang='scss'>
.outlinenone {
    outline: none;
    border-bottom: 2px solid #C00;
    background-color: #F5F5FC;
    border:none;
  }
  .imagen{
    width: 100%;
  }
  .contImg{
    width: 50vw;
  }
</style>
