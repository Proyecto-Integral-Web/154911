<template>
  <div class="container">
    <div class="pt-5">
      <div class="p-3">
        <div class="col-md-4">
          <LoginForm></LoginForm>
        </div>
        <div class="col">

        </div>
      </div>
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
