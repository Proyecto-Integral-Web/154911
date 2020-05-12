<template>
  <div class="home p-3">

    <div class="row">

      <div class="col">
        <about></about>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <viewProfile></viewProfile>
      </div>
    </div>

  </div>
</template>

<script lang="js">
import viewProfile from '@/components/viewprofile'
import about from '@/components/about'

export default {
  name: 'profile',
  components: {
    viewProfile,
    about
  }
}
</script>
