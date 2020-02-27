<template>
  <div class="contGeneral">
    <div class="row">
    <div class=" contImg">
      <img class="imagen" src="../assets/Robot4_1.png" alt="">
    </div>
    <section class="datos">
    <div class="">
      <label class="texto"><code class="texto">Nombre</code></label>
      <code><input
        type="text"
        id="form1"
        class="outlinenone "
        v-model="user.nombre"
        readonly
      ></code>
    </div>
    <div class="">
      <label class="texto"><code class="texto">Correo</code></label>
      <code><input
        type="text"
        id="form1"
        class="outlinenone "
        v-model="user.email"
        readonly
      ></code>
    </div>
    <div class="">
      <label class="texto"><code class="texto">Telefono</code></label>
      <code><input
        type="text"
        id="form1"
        class="outlinenone "
        v-model="user.telefono"
        readonly
      ></code>
    </div>
    </section>
    </div>
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
    this.user.nombre = usuario.displayName
    this.user.telefono = usuario.phoneNumber
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
    margin-left: 1vw;
    margin-top: 3vh;
    border-radius: 1vw;
    text-align: center;
    font-size: 16px;
    color:  #364FCC;
  }

  .texto{
    margin-left: 2vw;
    color: white;
    font-size: 16px;
  }
  .imagen{
    width: 100%;
    border:solid 5px  grey;
    background-color: white;

  }
  .contImg{
    width: 20vw;
    margin-left: 0%;
  }
  .contGeneral{
    background-color: #364FCC;
    width: 50vw;
    height: 60vh;
    margin: auto;
  }
  .datos{
    margin-top: 5vh;
  }
</style>
