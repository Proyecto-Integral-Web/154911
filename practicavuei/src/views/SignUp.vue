<template>
  <div class="home p-3">
    <div class="row">
      <div class="col">
        <SignUpForm></SignUpForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import SignUpForm from '@/components/SignUp'

export default {
  name: 'signUp',
  components: {
    SignUpForm
  }
}
</script>
