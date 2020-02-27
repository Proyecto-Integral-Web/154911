<template>
    <div>
      <h1><code class="txt">Perfil</code></h1>
      <ProfileForm></ProfileForm>
    </div>
</template>
<script>
import ProfileForm from '@/components/ProfileForm'
export default {
  name: 'profile',
  components: {
    ProfileForm
  }

}
</script>
<style lang='scss'>
.txt{
      color:  #364FCC;
}
</style>
